const PropertyDetailServices = ({ services }) => {

    return (
        <>
            {services.map(s => (
                <p key={s}>{s}</p>
            ))}
        </>
    );
}

export default PropertyDetailServices;