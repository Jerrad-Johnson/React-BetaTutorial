import './App.css';
// import {useState} from "react";

let cc = console.log;

function QueryTable(){
    let inputKey = "familySearchbar"
    let tableDesignKey = "familyMembers"
    cc(FAMILYMEMBERS);
    alert(5);

    return (
        <div className={"tableContainer"}>
            <h2>Table of My Family Members.</h2>
            <SearchBar
                inputKey = {inputKey} />
            <FamilyTableEntries
                tableDesignKey = {tableDesignKey} />
        </div>
    );
}

function SearchBar(inputKey){
    return(
      <div>
          <form>
              <label>Name</label><br />
              <input type={"text"} className={{inputKey} + " searchBar"} />
          </form>
      </div>
    );
}

function FamilyTableEntries(tableDesignKey){
    return(
        <div>
            <table className={{tableDesignKey}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Degree</th>
                        <th>Relation</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amy</td>
                        <td>First</td>
                        <td>Mother</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const FAMILYMEMBERS = [
    { degree: "First", name: "Amy", relation: "Mother", },
    { degree: "First", name: "Brent", relation: "Father", },
    { degree: "Second", name: "Tommy", relation: "Brother", },
    { degree: "Second", name: "Ashton", relation: "Brother", },
    { degree: "Second", name: "Lexy", relation: "Sister", },
    { degree: "Second", name: "Hannah", relation: "Sister", },
    { degree: "Second", name: "Abby", relation: "Sister", },
]

function ThinkingInReact() {
    return (
        <div className="TIR">
            <QueryTable
                FAMILYMEMBERS = {FAMILYMEMBERS}/>
        </div>
    );
}

export default ThinkingInReact;
