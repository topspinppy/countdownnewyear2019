import { useGlobal } from 'reactn'
import { useEffect } from 'react'
export default function hnyText() {
  const [ timeouts, settimeouts ] = useGlobal("timeouts");

  return (
    <div style={{
      "fontSize": "xx-large",
      "display": "flex",
      "justifyContent": "center"
    }}>
      <iframe width="450" height="215" src="https://www.youtube.com/embed/Wf5vQAmFUd0?autoplay=1&loop=1&controls=0" frameborder="0"></iframe>
      
    </div>
  );
}