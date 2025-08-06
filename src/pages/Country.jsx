import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../API/postApi";
import { Loader } from "../components/UI/Loader";
import {NavLink} from 'react-router-dom'
import { SeacrhFilter } from "../components/UI/SearchFilter";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Country =()=>{

    const[isPending,startTransition] = useTransition();
    const[countries,setCountries] = useState([]);

    const[search,setSearch] = useState();
    const[filter,setFilter] = useState("all");


    useEffect(()=>{
        startTransition(async()=>{
            const response = await getCountryData();
            setCountries(response.data);
        })
    },[])


    if(isPending) return <Loader/>
    // console.log(search,filter); 

    const searchCountry=(country)=>{
        if(search){
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const filterRegion =(country)=>{
        if(filter==="all") return country;
        return country.region===filter
    }

    const filterCountries = countries.filter((country)=>searchCountry(country) && filterRegion(country));
    
    return (
        <section className="country-section">
            <SeacrhFilter 
                search={search} 
                setSearch={setSearch} 
                filter={filter} 
                setFilter={setFilter} 
                countries={countries}
                setCountries={setCountries} 
            />
            <ul className="grid grid-four-cols">
                {filterCountries.map((x,index)=>{
                    // const { flags, name } = curCountry;
                    return (
                        <li>
                            <div className="container-card card">
                                <img src={x.flags.svg} alt={x.flags.alt}/>

                                <div className="countryInfo">
                                    <p className="card-title">{x.name.common}</p>
                                    <p>
                                        <span className="card-description">Region: </span>
                                        {x.region}
                                    </p>
                                    <p>
                                        <span className="card-description">Capital: </span>
                                        {x.capital[0]}
                                    </p>
                                    <p>
                                        <span className="card-description">Population: </span>
                                        {x.population}
                                    </p>
                                    <NavLink to={`/country/${x.name.common}`}>
                                        <button>Read More <FaLongArrowAltRight/></button>
                                    </NavLink>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}