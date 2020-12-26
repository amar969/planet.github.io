import { render } from "@testing-library/react";
import React, { useState } from "react";

export default class FetchRandomuser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: [],
            isFavourite: true,
            Mercury: null,
            Venus: null,
            Earth: null,
            Mars:null,
            Ceres: null,
            Jupiter: null,
            Saturn: null,
            Pluto: null,
            Haumea: null,
            Makemake: null,
            Eris: null

        };
        this.list = [];
    }

    
    state = {
        mercuries: true,
        venus: true,
        earth: true,
        mars:true,
        ceres: true,
        jupiter: true,
        saturn: true,
        pluto: true,
        haumea: true,
        makemake: true,
        eris: true

    };

    async componentDidMount() {
        const url = "https://assignment-machstatz.herokuapp.com/planet";
        const response = await fetch(url);
        const data = await response.json();

          
     
        this.setState({Mercury: data[0].name, mercuries: true});
        this.setState({Venus: data[1].name, venus: true});
        this.setState({Earth: data[2].name, earth: true});
        this.setState({Mars: data[3].name, mars: true});
        this.setState({Ceres: data[4].name, ceres: true});
        this.setState({Jupiter: data[5].name, jupiter: true});
        this.setState({Saturn: data[6].name, saturn: true});
        this.setState({Pluto: data[7].name, pluto: true});
        this.setState({Haumea: data[8].name, haumea: true});
        this.setState({Makemake: data[9].name, makemake: true});
        this.setState({Eris: data[10].name, eris: true});
        }

      

    render(){
        const buttonmercury = this.state.mercuries ? "Add to Favourite" : "Remove from Favourite";
        const buttonvenus = this.state.venus ? "Add to Favourite" : "Remove from Favourite";
        const buttonearth = this.state.earth ? "Add to Favourite" : "Remove from Favourite";
        const buttonmars = this.state.mars ? "Add to Favourite" : "Remove from Favourite";
        const buttonceres = this.state.ceres ? "Add to Favourite" : "Remove from Favourite";
        const buttonjupiter = this.state.jupiter ? "Add to Favourite" : "Remove from Favourite";
        const buttonsaturn = this.state.saturn ? "Add to Favourite" : "Remove from Favourite";
        const buttonpluto = this.state.pluto ? "Add to Favourite" : "Remove from Favourite";
        const buttonhaumea = this.state.haumea ? "Add to Favourite" : "Remove from Favourite";
        const buttonmakemake = this.state.makemake ? "Add to Favourite" : "Remove from Favourite";
        const buttoneris = this.state.eris ? "Add to Favourite" : "Remove from Favourite";
        return (
            <div className="note">
            {this.state.loading || !this.state.Mercury ?(
                <div>loading..</div>
            ) : (
                <div>
                 <div><p>{this.state.mercuries? <span>{this.state.Mercury}</span>:null}   <button onClick={() => {this.setState({mercuries: !this.state.mercuries}); }} type="button" class="btn btn-primary">{buttonmercury}</button></p></div>
                    <div><p>{this.state.venus? <span>{this.state.Venus}</span>:null}      <button onClick={() => {this.setState({venus: !this.state.venus}); }} type="button" class="btn btn-secondary">{buttonvenus}</button></p></div>
                    <div><p>{this.state.earth? <span>{this.state.Earth}</span>:null}      <button onClick={() => {this.setState({earth: !this.state.earth});}} type="button" class="btn btn-success">{buttonearth}</button></p></div>
                    <div><p>{this.state.mars? <span>{this.state.Mars}</span>:null}       <button onClick={() => {this.setState({mars: !this.state.mars});}} type="button" class="btn btn-danger">{buttonmars}</button></p></div>
                    <div><p>{this.state.ceres? <span>{this.state.Ceres}</span>:null}      <button onClick={() => {this.setState({ceres: !this.state.ceres});}} type="button" class="btn btn-warning">{buttonceres}</button></p></div>
                    <div><p>{this.state.jupiter? <span>{this.state.Jupiter}</span>:null}    <button onClick={() => {this.setState({jupiter: !this.state.jupiter});}} type="button" class="btn btn-info">{buttonjupiter}</button></p></div>
                    <div><p>{this.state.saturn? <span>{this.state.Saturn}</span>:null}     <button onClick={() => {this.setState({saturn: !this.state.saturn});}} type="button" class="btn btn-light">{buttonsaturn}</button></p></div>
                    <div><p>{this.state.pluto? <span>{this.state.Pluto}</span>:null}      <button onClick={() => {this.setState({pluto: !this.state.pluto});}} type="button" class="btn btn-dark">{buttonpluto}</button></p></div>
                    <div><p>{this.state.haumea? <span>{this.state.Haumea}</span>:null}     <button onClick={() => {this.setState({haumea: !this.state.haumea});}} type="button" class="btn btn-outline-primary">{buttonhaumea}</button></p></div>
                    <div><p>{this.state.makemake? <span>{this.state.Makemake}</span>:null}   <button onClick={() => {this.setState({makemake: !this.state.makemake});}} type="button" class="btn btn-outline-secondary">{buttonmakemake}</button></p></div>
                    <div><p>{this.state.eris? <span>{this.state.Eris}</span>:null}       <button onClick={() => {this.setState({eris: !this.state.eris});}} type="button" class="btn btn-outline-success">{buttoneris}</button></p></div>
                </div>
                
            )}
            </div>
        )
    }
}

// function Planet(){
//     return (
//         <div className="note">


//             <h2>List of Planets</h2>
//             <p>Mercury</p>  
//         </div>
//     );
// }

// export default Planet;