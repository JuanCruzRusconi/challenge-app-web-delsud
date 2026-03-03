import Image from "next/image";

const PropertyDetailHero = ({ title, image }) => {

    return (
        <>
            <header>
                    <h1>{title}</h1>
            </header>
            <div style={{ position: "relative", width: "100%", height: "450px" }}>
                    <Image 
                        src={image} 
                        alt="casa"
                        fill
                        style={{ objectFit: "cover" }}
                    />
            </div>
            <div>
                <p>Fotos</p>
                <p>Planos</p>
                <p>Reocrrido virtual</p>
            </div>
        </>
    );
}

export default PropertyDetailHero;