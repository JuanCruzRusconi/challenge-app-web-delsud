const PropertyDetailAttributes = ({ attributes }) => {

    return (
        <>
            {attributes.map(a => (
                <p key={a}>
                    {a}
                </p>
            ))}
        </>
    );
}

export default PropertyDetailAttributes;