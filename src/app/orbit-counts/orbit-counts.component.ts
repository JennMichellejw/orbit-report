import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css'],
  

})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  satelliteCounts = {
    spaceDebris: 0,
    communication: 0,
    probe: 0,
    positioning: 0,
    spaceStation: 0,
    telescope: 0
  }

  
  ngOnInit() {
    
    };

  constructor() { 
  
  };
  
  
  counts(satellite): void {
    let spaceDebrisCount = 0;
    let communicationCount = 0;
    let probeCount: number = 0;
    let positioningCount: number = 0;
    let spaceStationCount: number = 0;
    let telescopeCount: number = 0;

      for(let satellite of this.satellites){
        if(satellite.type === 'Space Debris'){
          spaceDebrisCount = spaceDebrisCount + 1
        } 
        if(satellite.type === 'Communication'){
          communicationCount = communicationCount + 1
        }
        if(satellite.type === 'Probe'){
          probeCount += 1
        }
        if (satellite.type === 'Positioning'){
          positioningCount += 1
        } 
        if(satellite.type === 'Space Station'){
          spaceStationCount += 1
        } 
        if (satellite.type === 'Telescope'){
          telescopeCount += 1
        }
               
        this.satelliteCounts.spaceDebris = spaceDebrisCount;
        this.satelliteCounts.communication = communicationCount;       
        this.satelliteCounts.probe = probeCount;
        this.satelliteCounts.positioning = positioningCount;
        this.satelliteCounts.spaceStation = spaceStationCount;
        this.satelliteCounts.telescope = telescopeCount;


      };
      
 
}
  
}
