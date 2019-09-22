import { Component,Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  fotoinicio:string = 'https://cdn.pixabay.com/photo/2016/11/22/23/47/dirt-road-1851258_1280.jpg';
  bmw:string = 'https://auto.ndtvimg.com/bike-images/big/bmw/r-1200/bmw-r-1200.jpg?v=4';
  harley:string = 'https://motosnuevas.formulamoto.es/galeria/346/10_XL883N.jpg';
  xr:string = 'http://park.shifting-gears.com/wp-content/uploads/2015/06/honda-xr-250-tornado-3.jpg';
  fz:string = 'http://www.motoresapleno.com.ar/wp-content/uploads/2015/02/Yamaha-FZ16-roja.jpg';
  variable:boolean = true;
  vacio:boolean = true;
  titulos:any = ['BMW GS 1200','Harley Davidson 883','Honda XR 250','Yamaha FZ 16'];
  descripcion:any = ['Sin importar a dónde te dirijas: la R 1200 GS Adventure es siempre un compañero dinámico. Se inspira en el legendario par bóxer de 125 Nm y 92 kW (125 CV) de un motor bicilíndrico de cuatro tiempos refrigerado por agua. Su concepto de refrigeración se basa en una combinación de refrigeración por aire y líquido. Esto se traduce en eficiencia, par elevado y, sobre todo: fiabilidad.','Cómo se pronuncia El Iron 883 es ​​un crucero de nivel de entrada y se ensambla en la India. Este tiene más credenciales deportivas y, como su nombre lo indica, es el receptor de un motor de 4 válvulas de 883 cc que produce 50 CV. Para decirlo sin rodeos, la Harley 883 no es una motocicleta para principiantes ideal, pero funcionaría en caso de apuro si está decidido a tener una Harley. Sería genial para recorrer distancias más largas o en cualquier momento que necesite un poco más de potencia que la que podría ofrecer un Ninja 300.','Las Honda XR250R y XR250L son motocicletas de trail y de doble deporte fabricadas por Honda desde 1979 hasta 2004, como parte de la serie Honda XR. Tienen motores de un solo cilindro de 249 cc y cuatro válvulas SOHC de cuatro tiempo.','El lema "Señor de las calles", con que fue lanzado este modelo de la marca japonesa al mercado, no le ha quedado grande a la moto que presentamos a continuación. La originalidad de su diseño es destacada mediante "Concepto Triple Muscular" el cual incluye su musculosa silueta, su estructura  y chasis muscular. 54 HP a 7500 revoluciones por minuto, con un torque que alcanza los 1.39 kilogramos de fuerza por metros a 6000 rpm y un tipo de encendido DC CDI (Con oscilador interno). Su peso es de 135 kilos con aceite y combustible.'];

}
