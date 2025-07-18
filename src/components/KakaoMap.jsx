import { useEffect } from "react";

export default function KakaoMap({ lat, lng }) {
  useEffect(() => {
    const loadKakaoScript = () => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=24ee25eee48c7d7dec1d47fb6adcaaec&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);
          map.setDraggable(false);
          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(lat, lng),
            map,
          });
        });
      };
      document.head.appendChild(script);
    };

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(lat, lng),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lng),
          map,
        });
      });
    } else {
      loadKakaoScript();
    }
  }, [lat, lng]);

  return <div id="map" className="w-full h-64 mt-4 rounded-lg shadow-md"></div>;
}
