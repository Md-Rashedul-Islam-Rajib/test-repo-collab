import { useState } from "react";

const Nazmul = () => {
    const [name, setName] = useState('Nazmul');
    return (
        <div onClick={() => setName('Nazmul Hassan')} className="button">
            My name is {name}
        </div>
    );
};

export default Nazmul;