import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})


export class HeroeComponent {

  
  heroe:any = {};

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService){

    this.activatedRoute.params.subscribe( params =>{
        this.heroe = this._heroesService.getHeroe( params['id'] );
        // console.log(this.heroe['nombre']);
    });

  }

  ///funcion para mostrar imagen segun casa del heroe pereo no se esta usando en el heroe.component.html
  retornaImagen(img:string) {
    let imagen:string;
    if(img=='DC'){
      imagen = 'assets/img/dc-logo.jpg';
      //console.log('Recibe DC........!DC');
      return imagen;
      
    }else {
      imagen = 'assets/img/marvel-logo.png';
      //console.log('Marvel');
      return imagen;
    }
    


  }    
}

// export class HeroeComponent{
//   constructor(private activatedRoute: ActivatedRoute) {
//     this.activatedRoute.url
//       .subscribe(url => console.log('The URL changed to: ' + url));
//   }

  
    
  
// }
// export class HeroeComponent  implements OnInit {
//   constructor(private activatedRoute: ActivatedRoute) {}

//   ngOnInit() {
//     this.activatedRoute.url
//       .subscribe(url => console.log('The URL changed to: ' + url));
//   }
// }