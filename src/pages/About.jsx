import countryData from '../api/countryData.json'

export const About =()=>{
    return (
        <section>
            <h2 className="container-title">
                Here are the Interesting Facts
                <br/>
                we're proud of
            </h2>

            <div className="gradient-cards">

                {countryData.map((x)=>{
                    return (
                        <div className="card" key={x.id}>
                            <div className="container-card bg-white-box">
                                <p className="card-title">{x.countryName}</p>
                                <p>
                                    <span className="card-description">Capital: </span>
                                    {x.capital}
                                </p>
                                <p>
                                    <span className="card-description">Population: </span>
                                    {x.population}
                                </p>
                                <p>
                                    <span className="card-description">Interesting Fact </span>
                                    {x.interestingFact}
                                </p>   
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}