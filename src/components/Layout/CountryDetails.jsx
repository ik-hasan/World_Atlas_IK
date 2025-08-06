import { NavLink, useParams } from "react-router-dom"
import { getCountryIndData } from "../../API/postApi";
import { Loader } from "../UI/Loader";
import { useEffect, useState, useTransition } from "react"

export const CountryDetails =()=>{
    const params = useParams();
    // console.log(params);

    const[isPending,startTransition] = useTransition();
    const[country,setCountry] = useState();

    const[search,setSearch] = useState();
    const[filter,setFilter] = useState();

    useEffect(()=>{
        startTransition(async()=>{
            const response = await getCountryIndData(params.id);
            console.log(response.data[0])
            if(response.status===200){
                setCountry(response.data[0]);
            }
            // setCountry(response.data[0]);
        })
    },[])

    if(isPending) return <Loader/>

    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                {country && (
                    <div className="country-image grid grid-two-cols">
                        <img
                            src={country.flags.svg}
                            alt={country.flags.alt || "Flag"}
                            className="flag"
                        />
                        <div className="country-content">
                            <p className="card-title">{country.name.official}</p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description">Native Names: </span>
                                    {Object.keys(country.name.nativeName)
                                        .map((x) => country.name.nativeName[x].common)
                                        .join(", ")
                                    }
                                </p>

                                <p>
                                    <span className="card-description">Population: </span>
                                    {country.population}
                                </p>
                                <p>
                                    <span className="card-description">Region: </span>
                                    {country.region}
                                </p>
                                <p>
                                    <span className="card-description">Sub Region: </span>
                                    {country.subregion}
                                </p>
                                <p>
                                    <span className="card-description">Capital: </span>
                                    {country.capital}
                                </p>
                                <p>
                                    <span className="card-description">Top Level Domain: </span>
                                    {country.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description">Currencies: </span>
                                    {Object.keys(country.currencies)
                                        .map((x) => country.currencies[x].name)
                                        .join(", ")
                                    }
                                </p> 
                                <p>
                                    <span className="card-description">Language: </span>
                                    {Object.keys(country.languages)
                                        .map((x) => country.languages[x])
                                        .join(", ")
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                <div className="country-card-backBtn">
                    <NavLink to="/country" className="backBtn">
                        <button>Go Back</button>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}