# SUMMA

Crea este sitio web usando EXACTAMENTE el código HTML que te paso abajo.

Reglas estrictas:
- No rediseñes nada. No cambies colores, tipografías, tamaños, espaciados, textos ni el orden de las secciones.
- No lo dividas en componentes de React, no lo pases a Tailwind, no "mejores" el código. Quiero el mismo archivo tal cual.
- Ponlo como el index.html del proyecto: una página estática con su CSS y su JavaScript embebidos, exactamente como vienen.
- El switch de idioma ES|EN ya está programado en el código. No lo reimplementes ni lo toques.
- Los textos entre dobles llaves, por ejemplo {{CIUDAD}}, son datos que voy a llenar después. Déjalos tal cual, no los rellenes ni los inventes.
- Cuando termines, no hagas ningún cambio adicional. Espera a que yo te pida modificaciones.

Aquí está el código:

<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Summa Products — Para fabricantes y dueños de marca</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --ink:#16181C; --ink-soft:#22252B; --ink-line:rgba(255,255,255,.15); --paper:#FDFDFC; --paper-warm:#EFF0F1; --silver:#C2C6CC; --dim:#A2A8B0; --faint:#7B818A; --muted:#626A73; --line:rgba(20,22,26,.12);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:Inter,system-ui,sans-serif;font-size:17px;line-height:1.7;color:var(--ink);background:var(--paper);transition:background .25s,color .25s;-webkit-font-smoothing:antialiased}
h1,h2{font-family:Fraunces,Georgia,serif;font-weight:600;letter-spacing:-.02em;line-height:1.12}
h1{font-size:clamp(2.1rem,5vw,3.9rem)}
h2{font-size:clamp(1.7rem,3.4vw,2.7rem)}
h3{font-size:1.05rem;font-weight:600;letter-spacing:-.01em}
a{color:inherit;text-decoration:none}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px}
@media(min-width:900px){.wrap{padding:0 48px}}
section{padding:96px 0}
@media(min-width:900px){section{padding:140px 0}}
.eyebrow{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);font-weight:600;margin-bottom:18px}
.dark .eyebrow{color:var(--silver)}
.lead{color:var(--muted);font-size:1.06rem;max-width:62ch;margin-top:22px}
.dark{background:var(--ink);color:#fff}
.dark .lead{color:var(--dim)}
.warm{background:var(--paper-warm)}
.btn{display:inline-flex;align-items:center;gap:8px;padding:14px 24px;border-radius:4px;font-weight:600;font-size:.95rem;border:1px solid transparent;cursor:pointer;transition:.2s}
.btn-p{background:#fff;color:var(--ink)}
.btn-p:hover{background:var(--silver)}
.on-light .btn-p{background:var(--ink);color:#fff}
.on-light .btn-p:hover{background:var(--ink-soft)}
.btn-o{border-color:var(--ink-line);color:#fff}
.btn-o:hover{border-color:#fff;background:rgba(255,255,255,.06)}
/* header */
header{position:fixed;top:0;left:0;right:0;z-index:50;transition:.25s;padding:14px 0}
header.solid{background:var(--paper);backdrop-filter:blur(10px);box-shadow:0 1px 0 var(--line)}
.hrow{display:flex;align-items:center;justify-content:space-between;gap:24px}
.logoslot{display:flex;align-items:center;gap:10px}
.logo{font-family:Fraunces,serif;font-size:1.05rem;letter-spacing:.18em;color:#fff;font-weight:600;white-space:nowrap}
header.solid .logo{color:var(--ink)}
.logotag{font-size:9px;letter-spacing:.1em;border:1px dashed var(--silver);color:var(--silver);padding:2px 5px;border-radius:3px;text-transform:uppercase}
header.solid .logotag{border-color:var(--line);color:var(--muted)}
nav{display:none;gap:26px;font-size:.9rem;color:rgba(255,255,255,.8)}
header.solid nav{color:var(--muted)}
nav a:hover{color:var(--ink);text-decoration:underline;text-underline-offset:5px}
header:not(.solid) nav a:hover{color:#fff}
@media(min-width:1080px){nav{display:flex}}
.hright{display:flex;align-items:center;gap:14px}
.lang{display:flex;border:1px solid var(--ink-line);border-radius:4px;overflow:hidden;font-size:.78rem;font-weight:600}
header.solid .lang{border-color:var(--line)}
.lang button{background:none;border:0;padding:7px 11px;cursor:pointer;color:rgba(255,255,255,.65)}
header.solid .lang button{color:var(--muted)}
.lang button.on{background:#fff;color:var(--ink)}
header.solid .lang button.on{background:var(--ink);color:#fff}
.hbtn{display:none}
@media(min-width:780px){.hbtn{display:inline-flex}}
/* hero */
.hero{background:var(--ink);color:#fff;padding:190px 0 70px;position:relative;overflow:hidden}
.hero:after{content:"";position:absolute;inset:0;background:radial-gradient(900px 430px at 80% 8%,rgba(255,255,255,.07),transparent 66%);pointer-events:none}
.hero h1{max-width:19ch}
.hero .cta{display:flex;flex-wrap:wrap;gap:14px;margin-top:34px}
.chan{margin-top:62px;padding-top:26px;border-top:1px solid var(--ink-line)}
.chan span{font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--faint)}
.chan ul{list-style:none;display:flex;flex-wrap:wrap;gap:10px;margin-top:16px}
.chan li{font-size:.86rem;font-weight:500;color:var(--silver);border:1px solid var(--ink-line);border-radius:4px;padding:6px 12px}
/* metrics */
.metrics{background:var(--ink-soft);color:#fff;padding:56px 0 46px;border-top:1px solid var(--ink-line)}
.mgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:34px 22px}
@media(min-width:840px){.mgrid{grid-template-columns:repeat(3,1fr)}}
@media(min-width:1160px){.mgrid{grid-template-columns:repeat(6,1fr);gap:26px 18px}}
.mnum{font-family:Fraunces,serif;font-size:2.3rem;color:#fff;line-height:1;white-space:nowrap}
.msup{font-size:.55em;vertical-align:.5em;color:var(--silver)}
.mlab{font-size:.87rem;color:var(--dim);margin-top:9px}
.mnote{font-size:.78rem;color:var(--faint);margin-top:34px}
.ph{background:rgba(255,255,255,.09);border:1px dashed var(--silver);border-radius:3px;padding:0 7px;font-family:ui-monospace,monospace;font-size:.62em;vertical-align:middle;color:var(--silver)}
.on-light .ph,section:not(.dark) .ph{background:rgba(0,0,0,.05);border-color:var(--muted);color:var(--muted)}
/* who */
.two{display:grid;gap:46px;align-items:start}
@media(min-width:960px){.two{grid-template-columns:1.25fr .85fr;gap:70px}}
.shot{border-radius:6px;overflow:hidden;border:1px solid var(--line);aspect-ratio:4/5;background:var(--paper-warm);position:relative}
.shot img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(1) contrast(1.05)}
.shotnote{position:absolute;left:12px;bottom:12px;right:12px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;background:rgba(14,14,16,.82);color:var(--silver);padding:6px 9px;border-radius:3px}
.pillars{display:grid;gap:30px;margin-top:52px}
@media(min-width:760px){.pillars{grid-template-columns:repeat(3,1fr)}}
.pillar{border-top:2px solid var(--ink);padding-top:16px}
.pillar p{color:var(--muted);font-size:.94rem;margin-top:7px}
/* growth */
.growth{display:flex;align-items:center;gap:22px;margin-top:36px;padding:24px;border:1px solid var(--line);border-radius:6px;background:var(--paper-warm);flex-wrap:wrap}
.gcol{flex:1;min-width:150px}
.glab{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);display:block;margin-bottom:12px}
.gcol ul{list-style:none;display:grid;gap:6px;font-size:.95rem;font-weight:500}
.gcol:last-of-type ul{font-weight:600}
.garrow{font-size:1.5rem;color:var(--muted);flex:none}
/* brands */
.brands{display:grid;gap:20px;margin-top:52px}
@media(min-width:620px){.brands{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1020px){.brands{grid-template-columns:repeat(4,1fr)}}
.brand{background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:24px}
.blogo{height:64px;display:flex;align-items:center;justify-content:center;border:1px dashed var(--muted);border-radius:4px;margin-bottom:20px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);text-align:center;padding:0 8px}
.brand .tag{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);border:1px solid var(--line);padding:2px 7px;border-radius:3px;display:inline-block;margin-bottom:11px}
.brand h3{font-size:1.1rem}
.brand p{color:var(--muted);font-size:.9rem;margin-top:8px}
/* cards */
.grid3{display:grid;gap:22px;margin-top:52px}
@media(min-width:700px){.grid3{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1000px){.grid3{grid-template-columns:repeat(3,1fr)}}
.card{background:var(--paper);border:1px solid var(--line);border-radius:6px;padding:28px}
.card svg{width:22px;height:22px;stroke:var(--ink);stroke-width:1.5;fill:none;margin-bottom:16px}
.card p{color:var(--muted);font-size:.93rem;margin-top:8px}
/* channels grid */
.grid9{display:grid;gap:1px;margin-top:52px;background:var(--line);border:1px solid var(--line);border-radius:6px;overflow:hidden}
@media(min-width:640px){.grid9{grid-template-columns:repeat(2,1fr)}}
@media(min-width:1000px){.grid9{grid-template-columns:repeat(3,1fr)}}
.ch{background:var(--paper);padding:26px 24px}
.ch .tag{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);border:1px solid var(--line);padding:2px 7px;border-radius:3px;display:inline-block;margin-bottom:13px}
.ch p{color:var(--muted);font-size:.9rem;margin-top:7px}
/* steps */
.steps{display:grid;gap:36px;margin-top:56px}
@media(min-width:900px){.steps{grid-template-columns:repeat(4,1fr);gap:30px}}
.step{border-top:1px solid var(--ink-line);padding-top:20px}
.snum{font-family:Fraunces,serif;font-size:2.3rem;color:var(--silver);line-height:1;margin-bottom:12px}
.step p{color:var(--dim);font-size:.93rem;margin-top:8px}
/* fit */
.fit{display:grid;gap:44px;margin-top:44px}
@media(min-width:860px){.fit{grid-template-columns:1.1fr .9fr;gap:64px}}
.fit h3{margin-bottom:18px;font-size:.8rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted)}
.fit ul{list-style:none;display:grid;gap:15px}
.fit li{display:flex;gap:12px;font-size:.96rem;line-height:1.6}
.fit li b{flex:none;color:var(--ink);font-weight:700}
.no li b{color:var(--silver)}
.no li{color:var(--muted)}
/* faq */
details{border-bottom:1px solid var(--line);padding:20px 0}
summary{cursor:pointer;font-weight:600;list-style:none;display:flex;justify-content:space-between;gap:20px;font-size:1.02rem}
summary::-webkit-details-marker{display:none}
summary:after{content:"+";color:var(--muted);font-weight:400;font-size:1.4rem;line-height:1}
details[open] summary:after{content:"–"}
details p{color:var(--muted);font-size:.95rem;margin-top:12px;max-width:75ch}
.faqs{margin-top:40px;border-top:1px solid var(--line)}
/* contact */
.cgrid{display:grid;gap:40px;margin-top:52px}
@media(min-width:940px){.cgrid{grid-template-columns:.85fr 1.15fr;gap:56px}}
.ccard{background:var(--ink-soft);border:1px solid var(--ink-line);border-radius:6px;padding:22px;margin-bottom:14px}
.ccard .k{font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--silver)}
.ccard .v{font-size:1.15rem;font-weight:600;margin-top:7px}
.ccard .m{font-size:.86rem;color:var(--dim);margin-top:4px}
.form{background:var(--ink-soft);border:1px solid var(--ink-line);border-radius:6px;padding:28px}
.frow{display:grid;gap:18px}
@media(min-width:640px){.frow.two-col{grid-template-columns:1fr 1fr}}
.field{display:grid;gap:7px;margin-bottom:18px}
.field label{font-size:.79rem;letter-spacing:.07em;text-transform:uppercase;color:var(--dim)}
.field input,.field select,.field textarea{background:var(--ink);border:1px solid var(--ink-line);border-radius:4px;padding:12px 14px;color:#fff;font-family:inherit;font-size:.95rem}
.field textarea{min-height:96px;resize:vertical}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid #fff;outline-offset:1px}
.priv{font-size:.78rem;color:var(--faint);margin-top:14px;text-align:center}
/* footer */
footer{background:var(--ink);color:var(--dim);border-top:1px solid var(--ink-line);padding:60px 0 34px;font-size:.9rem}
.fgrid{display:grid;gap:34px}
@media(min-width:820px){.fgrid{grid-template-columns:1.4fr .8fr .8fr}}
footer .logo{color:#fff;margin-bottom:14px;display:block}
footer h4{color:#fff;font-size:.75rem;letter-spacing:.14em;text-transform:uppercase;margin-bottom:14px}
footer ul{list-style:none;display:grid;gap:9px}
footer a:hover{color:#fff}
.legal{margin-top:44px;padding-top:22px;border-top:1px solid var(--ink-line);font-size:.8rem;color:var(--faint);display:flex;flex-wrap:wrap;gap:8px 22px;justify-content:space-between}
.rev{opacity:0;transform:translateY(12px);transition:opacity .5s ease,transform .5s ease}
.rev.in{opacity:1;transform:none}









    SUMMA PRODUCTSlogo aquí
    
      Quiénes somos
      Nuestras marcas
      Qué hacemos
      Canales
      Cómo trabajamos
      Preguntas
    
    


      


        ES
        EN
      


      Quiero que vendan mi producto
    






    

Para fabricantes y dueños de marca


    

Tu producto es bueno. Lo que falta es quien lo sepa vender en México.


    

Desde 2019 construimos y vendemos marcas en once canales digitales de México, Estados Unidos y Canadá. Compramos, almacenamos, listamos, anunciamos, enviamos y damos servicio al cliente. Tú fabricas: nosotros nos encargamos del canal digital completo.


    


      Quiero que vendan mi producto
      Conoce a Summa
    


    


      Vendemos en:
      


        

Amazon USA

Amazon México

Amazon Canadá

Mercado Libre

Liverpool


        

Sears

Coppel

Walmart

TikTok Shop

Cronia

Tiendas propias en Shopify


      


    






    


      

2019

Vendiendo marcas desde


      

4

Marcas propias que operamos


      

+50

SKUs activos en catálogo


      

+5,000

Unidades vendidas al mes en Amazon


      

+1,000

Reseñas de clientes en marketplaces


      

11

Canales de venta operados


    


    

Las unidades corresponden a temporada normal; en temporada alta el volumen se duplica. Cifras a agosto de 2026.






    


      


        

Quiénes somos


        

No somos una agencia. Somos el socio comercial que compra, vende y responde.


        

Summa Products empezó en 2019 con una sola marca, cuatro productos y una sola tienda: Amazon Estados Unidos. Hoy operamos cuatro marcas, más de 50 SKUs activos y once canales de venta en México, Estados Unidos y Canadá, con más de mil reseñas de clientes acumuladas en los marketplaces.


        

Ese crecimiento no salió de un presupuesto grande. Salió de aprender a vender producto por producto: qué listado convierte, cuánto aguanta un precio, cuándo reponer inventario antes de quebrar el stock, qué campaña deja margen y cuál solo quema dinero. Lo hicimos con capital propio, así que cada error lo pagamos nosotros.


        

Por eso no te cobramos una cuota por asesorarte. Compramos tu producto, lo tenemos en nuestra bodega y asumimos el riesgo de venderlo. Trabajamos desde {{CIUDAD}} con bodega propia y un equipo interno que cubre compras, catálogo, publicidad, logística y atención a clientes.


        


          


            Cuando arrancamos · 2019
            

1 marca

4 productos

1 canal (Amazon USA)

1 país


          


          

→


          


            Hoy
            

4 marcas

+50 SKUs activos

11 canales

3 países


          


        


      


      


        
        

Reemplazar con foto real de bodega / empaque


      


    


    


      

Operación propia

Bodega, inventario y empaque manejados por nosotros. No dependemos de terceros para surtir.


      

Decisiones con datos

Planeamos inventario y precio con análisis semanal de venta real por canal, no con corazonadas.


      

Un solo interlocutor

Un contacto directo por marca. Sin pasar por cuatro áreas para resolver un pedido.


    






    

Nuestras marcas


    

Antes de vender la tuya, aprendimos vendiendo las nuestras.


    

Operamos cuatro marcas propias desde 2019. Cada una la construimos desde cero: catálogo, listados, publicidad, inventario y servicio al cliente. Cuando te decimos qué funciona en un canal, no es teoría de agencia: es lo que aprendimos arriesgando nuestro propio capital.


    


      


        

logo aquí


        Calcetería
        

SpecialFit Socks


        

{{UNA LÍNEA SOBRE LA MARCA}}


      


      


        

logo aquí


        Suplementos alimenticios
        

InstaNutra


        

{{UNA LÍNEA SOBRE LA MARCA}}


      


      


        

logo aquí


        {{CATEGORÍA}}
        

IdealFit


        

{{UNA LÍNEA SOBRE LA MARCA}}


      


      


        

logo aquí


        {{CATEGORÍA}}
        

Nivoo


        

{{UNA LÍNEA SOBRE LA MARCA}}


      


    






    

Qué hacemos


    

Todo lo que hay entre tu bodega y el cliente final, lo hacemos nosotros.


    


      

Listados que sí venden

Fotografía, títulos, viñetas, A+ Content y fichas técnicas optimizadas para búsqueda en cada marketplace.


      

Publicidad y posicionamiento

Manejamos campañas de Amazon Ads, Mercado Ads y TikTok con presupuesto propio y seguimiento de rentabilidad por producto.


      

Inventario y logística

Recibimos en bodega, enviamos a Amazon FBA y Mercado Libre Full, y reponemos antes de que se agote.


      

Precio y control de canal

Cuidamos que tu marca no se canibalice entre canales y peleamos el Buy Box sin destruir tu precio de lista.


      

Atención al cliente y reseñas

Contestamos preguntas, resolvemos devoluciones y trabajamos la reputación de tu producto.


      

Reportes claros

Sabes qué se vendió, en qué canal y a qué ritmo. Sin pedirlo tres veces.


    






    

Dónde vendemos


    

Once canales, una sola operación.


    

Empezamos en uno y hoy operamos once. Cada canal tiene su propio cliente, su propia logística y sus propias reglas de precio. Los manejamos todos desde una sola bodega y un solo equipo, así tu marca no compite contra sí misma.


    


      

Marketplace · Estados Unidos

Amazon Estados Unidos

Donde arrancamos en 2019. Puerta de entrada al mercado estadounidense sin que abras operación allá.


      

Marketplace · México

Amazon México

El canal de mayor volumen del país. Inventario en FBA y campañas activas.


      

Marketplace · Canadá

Amazon Canadá

El tercer mercado de Norteamérica, con la misma cuenta y la misma logística que ya operamos.


      

Marketplace · México

Mercado Libre

Operación con Mercado Envíos Full para entrega en el día.


      

Retail departamental

Liverpool

Marketplace del departamental con el cliente de mayor ticket promedio.


      

Retail departamental

Sears

Complementario a Liverpool, con perfil de cliente similar y menos competencia por categoría.


      

Retail departamental

Coppel

Alcance al cliente de crédito y a plazas donde el marketplace tradicional no llega.


      

Autoservicio

Walmart

Marketplace de crecimiento acelerado en México, con un cliente distinto al de Amazon.


      

Social commerce

TikTok Shop

Venta por contenido y video. El canal donde un producto nuevo se descubre, no se busca.


      

Marketplace

Cronia

{{DESCRIPCIÓN DE CRONIA}}


      

Canal directo

Tiendas propias en Shopify

Sin comisión de marketplace. Aquí controlamos promociones, lanzamientos y precio de lista.


    






    

Cómo trabajamos


    

De la primera llamada al primer pedido, en semanas.


    


      

01

Contacto

Nos mandas tu catálogo, precios de mayoreo y volúmenes disponibles.


      

02

Evaluación

Analizamos demanda, competencia y margen real en cada canal. Te decimos de frente si tu producto tiene lugar o no.


      

03

Pedido piloto

Arrancamos con una compra inicial acotada para probar rotación sin riesgo grande para nadie.


      

04

Escala

Si rota, subimos volumen, abrimos más canales y metemos presupuesto de publicidad.


    






    

Perfil que buscamos


    

Somos selectivos, y eso te conviene.


    

No metemos todo a nuestro catálogo. Cada producto que subimos compite con nuestra propia atención y nuestro propio capital. Esto es lo que hace que una marca encaje con nosotros:


    


      


        

Encaja bien


        


          

✓Capacidad de surtir con consistencia y tiempos claros de entrega.


          

✓Precio de mayoreo que deje margen después de comisiones de marketplace y envío.


          

✓Producto con documentación en orden: código de barras, ficha técnica, empaque en condiciones.


          

✓Disposición a cuidar el canal digital y no reventar el precio con diez vendedores más.


        


      


      


        

Todavía no


        


          

—Producto sin inventario disponible ni fecha de producción.


          

—Márgenes que solo funcionan vendiendo a consignación.


          

—Categorías con restricción regulatoria que no podemos cubrir todavía.


        


      


    






    

Preguntas de proveedores


    

Lo que casi siempre nos preguntan.


    


      ¿Compran o trabajan a consignación?

Compramos. Emitimos orden de compra y pagamos según las condiciones que acordemos por escrito.


      ¿Necesito tener cuenta de vendedor en Amazon o Mercado Libre?

No. Vendemos bajo nuestras cuentas, ya establecidas desde 2019 y con más de mil reseñas de clientes acumuladas. Tú no administras nada de la plataforma.


      ¿Trabajan con marcas que ya se venden en línea?

Sí, siempre que haya reglas claras de canal y de precio para que no nos peleemos entre nosotros.


      ¿Aceptan marcas extranjeras sin operación en México?

Sí. Es uno de los casos donde más aportamos: entrada al mercado mexicano sin que abras entidad ni bodega aquí.


      ¿Cuánto tarda en estar mi producto publicado?

Depende de la categoría y de la documentación, normalmente semanas, no meses, una vez recibido el inventario.


      ¿Entran a todos los canales desde el principio?

No. Arrancamos en los canales donde el producto tiene la mejor probabilidad de rotar y abrimos el resto conforme se confirma la demanda.


      Si ya tienen marcas propias, ¿van a competir con la mía?

Nuestras cuatro marcas viven en categorías definidas y no las usamos para copiar producto de proveedores. Si tu producto compite de frente con alguna, te lo decimos en la primera llamada en lugar de que lo descubras seis meses después.


      ¿En qué categorías tienen experiencia?

Calcetería, suplementos alimenticios y {{OTRAS CATEGORÍAS}}. Nuestras cuatro marcas propias operan en esas categorías, así que ahí conocemos al cliente, la competencia y el costo real de vender.


    






    

Hablemos


    

¿Quieres que vendamos tu producto? Escríbenos.


    

Mándanos tu catálogo y tu lista de precios de mayoreo. Si hay potencial, te contestamos con un análisis del canal, no con un correo automático.


    


      


        


          

Correo — la vía más rápida


          @summaproducts.com?subject=Quiero%20que%20Summa%20venda%20mi%20producto">admin@summaproducts.com</a></div>
          

Mándanos catálogo y lista de precios de mayoreo.


        
        


          

WhatsApp


          

+52 1 222 299 3675


          

Atención a proveedores


          Escribir por WhatsApp
        


        

Horario y ubicación

{{HORARIO}}

{{CIUDAD}}


      
      


        


          

Nombre completo


          

Empresa o marca


        


        


          

Correo


          

Teléfono / WhatsApp


        


        

Categoría de productoConsumoHogarBelleza y cuidado personalSuplementos alimenticiosDeportesOtro


        

Volumen mensual que puedes surtirMenos de 500 unidades500 – 2,0002,000 – 10,000Más de 10,000


        

¿Ya se vende en línea en México?SíNo


        

Mensaje


        Enviar
        

Usamos tus datos solo para evaluar la oportunidad comercial. No los compartimos con terceros.


      


    
  





    


      


        SUMMA PRODUCTS
        

Operamos y vendemos marcas en los principales canales digitales de México, Estados Unidos y Canadá.


      


      


        

Navegación


        

Quiénes somos

Nuestras marcas

Qué hacemos

Canales

Contacto


      


      


        

Contacto


        @summaproducts.com">admin@summaproducts.com</a></li><li><a href="https://wa.me/5212222993675">+52 1 222 299 3675

{{CIUDAD}}


      
    
    


      © 2026 Summa Products. {{RAZÓN SOCIAL}}.
      Aviso de Privacidad · Términos
    


  


@summaproducts.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
}
const hd=document.getElementById('hd');
addEventListener('scroll',()=>hd.classList.toggle('solid',scrollY>60));
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('in')),{threshold:.12});
document.querySelectorAll('.rev').forEach(el=>io.observe(el));
</script>
</body>
</html>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://summaproducts.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/36e620ce-a17d-4f23-bd23-54251db0414f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
