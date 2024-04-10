
export default function searchBox({data, setSearchResults}){

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
                <form className="search" onSubmit={handleSubmit}>
                    <div class="wrap">
                        <div class="search">
                            <input type="text" className="searchTerm" placeholder="What are you looking for?" onChange={handleChange} />
                        </div>
                    </div>
                </form>
            </header>
            );

}