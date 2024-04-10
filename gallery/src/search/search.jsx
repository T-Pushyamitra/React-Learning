import { useEffect } from "react";
import { useState } from "react";

export default function SearchBox({data, setSearchResults}){

    const [placeholder, setPlaceholder] = useState("What are you looking for?");

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            if (placeholder === "What are you looking for?")
                setPlaceholder("Use '#' for search type. Example: #food")
            else
                setPlaceholder("What are you looking for?")
        }, 3000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [placeholder]);

    const handleChange = (e) => {
        if (!e.target.value) return setSearchResults(data);

       const result = (e.target.value[0] === "#") ? data.filter(_data => _data.tag.toLowerCase().startsWith(e.target.value.slice(1, e.target.value.length))) :
                        data.filter(_data => _data.tag.toLowerCase().includes(e.target.value) || 
                                             _data.desc.toLowerCase().includes(e.target.value))
        setSearchResults(result)
      };
    
    const handleSubmit = (e) => e.preventDefault();

    return (
            <header>
                <form  onSubmit={handleSubmit}>
                    <div className="wrap">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder={placeholder} onChange={handleChange} />
                        </div>
                    </div>
                </form>
            </header>
            );

}