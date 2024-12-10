import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({info}){
    const INT_IMG =
    "https://media.istockphoto.com/id/2124910069/photo/thermometer-background-is-blue-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=86h-SE4PlwaJRLVed35N3-PB733vrdfwdkcukCG18fo=";

    const HOT_IMG =
    "https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.jpg?s=612x612&w=0&k=20&c=gVcU14yvx4tBJQpah77IBS_3RfqtbVKQGF8HRm1dOr0=" ;
    const COLD_IMG =
    "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=0&k=20&c=rXSudGCCelYGe1O4y8Ix3txjVC-UdBlCLa8DIgRr4mg=";
    const RAIN_IMG=
    "https://media.istockphoto.com/id/968914210/photo/on-our-way-through-the-rain-we-go.jpg?s=1024x1024&w=is&k=20&c=QhH1ujH2f9zppQL_NkJiLidrHzfso-DrtW93RPl6bxA=";

    
    return (<div className="infobox">
        <h2>WeatherInfo-{info.weather}</h2>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_IMG 
            : info.temp>15 
            ? HOT_IMG 
            : COLD_IMG}
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity>80 ? <ThunderstormIcon />
            : info.temp>15 
            ? <WbSunnyIcon />
            : <SevereColdIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temparature:{info.temp}&deg;C</p>
        <p>Humidity:{info.humidity}</p>
        <p>Maximun Temparature :{info.tempMax}&deg;C</p>
        <p>Minimum Temparature :{info.tempMin}&deg;C</p>
        <p>The temperature is describes as <i>{info.weather}</i>
        and it feels like {info.feelsLike}&deg;C</p>
        </Typography>
        </CardContent>
    </Card>
    </div>)
}