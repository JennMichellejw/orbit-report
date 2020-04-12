import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
  

})
export class OrbitCountsComponent implements OnInit {
  @Input('debris') spaceDebris: number ;
  communication: number;
  probe: number;
  positioning: number;
  spaceStation: number;
  telescope: number;
  @Input() satellites: Satellite[];
 

  
  ngOnInit() {
    
    };
    
  constructor() { 
  
  };
  
  
  counts(satellite): void {
    let spaceDebris = 0;
    let communication: number =0;
    let probe: number = 0;
    let positioning: number = 0;
    let spaceStation: number = 0;
    let telescope: number = 0;

      for(let satellite of this.satellites){
        if(satellite.type === 'Space Debris'){
          spaceDebris = spaceDebris + 1
        } 
        if(satellite.type === 'Communication'){
          communication =+ 1
        }
        if(satellite.type === 'Probe'){
          probe =+ 1
        }
        if (satellite.type === 'Positioning'){
          positioning =+ 1
        } 
        if(satellite.type === 'Space Station'){
          spaceStation =+ 1
        } 
        if (satellite.type === 'Telescope'){
          telescope =+ 1
        }
                
      
      };
      console.log(spaceDebris)

}
  
}
