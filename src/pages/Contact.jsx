export const Contact =()=>{

    const z = (x)=>{
        const y = Object.fromEntries(x.entries());
        console.log(y)
    }
    return (
        <section className="section-contact">
            <h2 className="container-title">Contact Us</h2>
            <div className="contact-wrapper container">
                <form action={z}>
                    <input
                        className="form-control"
                        type="text"
                        required
                        autoComplete="off"
                        placeholder="Enter your name"
                        name="username"
                    />
                    <input
                        className="form-control"
                        type="email"
                        required
                        autoComplete="off"
                        placeholder="Enter your email"
                        name="email"
                    />
                    <textarea
                        className="form-control"
                        rows="10"
                        required
                        autoComplete="off"
                        placeholder="Enter your message"
                        name="message"
                    ></textarea>
                    <button type="submit" value="send">Send</button>
                </form>
            </div>
        </section>
    )
}