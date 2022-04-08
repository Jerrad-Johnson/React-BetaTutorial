import './App.css';
import {useState} from "react";

function QueryTable({familyMembers}){
    let inputKey = "familySearchbar"
    let tableDesignKey = "familyMembers"
    let [searchValue, setSearchValue] = useState("");

    return (
        <div className={"tableContainer"}>
            <h2>Table of My Family Members.</h2>
            <SearchBar
                inputKey = {inputKey}
                searchValue = {searchValue}
                onSearchValueChange = {setSearchValue}
            />
            <TableEntries
                tableDesignKey = {tableDesignKey}
                familyMembers = {familyMembers}
                searchValue = {searchValue}
            />
        </div>
    );
}

function SearchBar({inputKey, searchValue, onSearchValueChange}){
    return(
      <div>
          <form>
              <label>Search by Name</label><br />
              <input
                  type={"text"}
                  className={inputKey + " searchBar"}
                  value={searchValue}
                  onChange={(e) =>
                      onSearchValueChange(e.target.value)
                  }
              />
          </form>
      </div>
    );
}

function CreateTableHead({familyMembers}){
    let headers = Object.keys(familyMembers[0]);
    const tableHeader = [];

    headers.forEach((header) => {
        tableHeader.push(
            <th key={header}>{header}</th>
        );
    });

    return (
        <thead>
            <tr>
                {tableHeader}
            </tr>
        </thead>
    );
}

function CreateTableRows({familyMembers, searchValue}){
    const rows = [];

    familyMembers.forEach(member => {
        if (member.name.toLowerCase().includes(searchValue.toLowerCase())){
            rows.push(
                <tr key={member.name}>
                    <td>{member.name}</td>
                    <td>{member.relation}</td>
                    <td>{member.degree}</td>
                </tr>
            );
        }
    });

   return(
       <tbody>
            {rows}
       </tbody>
   );
}

function TableEntries({tableDesignKey, familyMembers, searchValue}){
    return(
        <div>
            <table className={tableDesignKey}>
                    <CreateTableHead
                        familyMembers = {familyMembers} />
                    <CreateTableRows
                        familyMembers = {familyMembers}
                        searchValue = {searchValue}
                    />
            </table>
        </div>
    );
}

const FAMILYMEMBERS = [
    { name: "Amy", relation: "Mother", degree: "First",},
    { name: "Brent", relation: "Father", degree: "First", },
    { name: "Tommy", relation: "Brother", degree: "Second", },
    { name: "Ashton", relation: "Brother",  degree: "Second", },
    { name: "Lexy", relation: "Sister",  degree: "Second", },
    { name: "Hannah", relation: "Sister",  degree: "Second", },
    { name: "Abby", relation: "Sister",  degree: "Second", },
]

function ThinkingInReact() {
    return (
        <div className="TIR">
            <QueryTable
                familyMembers = {FAMILYMEMBERS}/>
        </div>
    );
}

export default ThinkingInReact;
