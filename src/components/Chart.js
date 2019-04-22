import React, { Component } from 'react';
import { Bar, Line, Pie, Scatter, Radar, Polar, Bubble} from 'react-chartjs-2';

class Chart extends Component{
   constructor(props){
       super(props);
       this.state = {
           chartData: props.chartData          
        }
    } 
   static defaultProps = {
       displatTitle:true,
       displayLegend:true,
       legendPosition:'right',
       location:'City'
   } 
    
    render(){
        return(
            <div className="chart">
            <Bar
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Line
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Pie
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Scatter
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Radar
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Polar
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

                <Bubble
                data={this.state.chartData}
                // width={100}
                // height={50}
                options={{
                    title:{
                        display:this.props.displatTitle,
                        text:'Largest Cities In ' +this.props.location,
                        fontSize:25
                    },
                    legend:{
                        display:this.props.displayLegend,
                        position:this.props.legendPosition
                    }
                 }}
                />

            </div>
        )
    }
}


export default Chart;