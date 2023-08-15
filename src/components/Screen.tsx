import {useEffect} from "react";
import axios from "axios";

function Screen() {
	useEffect(() => {
    // axios.get('https://api.gismeteo.net/v2/weather/current/4368/').then((response) => {
    //   setPost(response.data);
    // });

    fetch("https://api.gismeteo.net/v2/weather/current/4368/", {
      headers: {
        'X-Gismeteo-Token': '56b30cb255.3443075'
      },
    })
    .then(res => res.json())
    .then(
      (result) => {
        console.log('result', result);
      }
    )
  }, []);

	return (
		<div >

		</div>
	);
}

export default Screen;