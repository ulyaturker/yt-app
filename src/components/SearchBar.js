import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit })=> {
    const [term,setTerm] = useState ('');

    /*const onInputChange= (event) => {
        //this.setState({term:event.target.value})
        setTerm(event.target.value);
    };*/

    const onSubmit = event => {
        event.preventDefault();
        //todo make sure recall,callback from parent component
        //this.props.onFormSubmit(this.state.term);
        onFormSubmit(term);
    };

    return (
        <div className ="search-bar ui segment" >
            <form onSubmit ={onSubmit} className="ui form">
                <div className="field">
                    <label>Search Video</label>
                    <input type="text" 
                            value={term}
                            onChange={(event)=>setTerm(event.target.value)}>
                    </input>
                </div>
            </form>
        </div>
    );

};

export default SearchBar;