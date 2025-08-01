import { useParams } from "react-router-dom";


const DetailsProdect = () => {
    const {id} = useParams()
    console.log(id);
    
    return (
        <div>
            
        </div>
    );
};

export default DetailsProdect;