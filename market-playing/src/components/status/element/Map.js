import { useState } from "react";

const Map = () => {
  const character_level = 1;
  const [currentLocation, setCurrentLocation] = useState(0);

  const mapLocations = [
    { id: 0, location: "[집]집", require_level: 1, coordinate: [0, 0] },
    { id: 1, location: "[숲]마녀의 숲", require_level: 1, coordinate: [0, 1] },
    {
      id: 2,
      location: "[계곡]가파른 계곡",
      require_level: 1,
      coordinate: [0, 2],
    },
    {
      id: 3,
      location: "[던전]그리무츠의 동굴",
      require_level: 1,
      coordinate: [0, 3],
    },
    {
      id: 4,
      location: "[마을]슈비즈 마을",
      require_level: 2,
      coordinate: [1, 2],
    },
    {
      id: 5,
      location: "[들판]칼바람이 부는 언덕",
      require_level: 2,
      coordinate: [2, 2],
    },
    {
      id: 6,
      location: "[숲]석양이 지는 숲",
      require_level: 2,
      coordinate: [2, 1],
    },
    {
      id: 7,
      location: "[던전]이그스의 호수",
      require_level: 2,
      coordinate: [2, 0],
    },
    {
      id: 8,
      location: "[마을]오르메인 마을",
      require_level: 3,
      coordinate: [3, 2],
    },
    {
      id: 9,
      location: "[들판]프레이스 들판지대",
      require_level: 3,
      coordinate: [3, 3],
    },
    {
      id: 10,
      location: "[성막]소리드 제 1성막",
      require_level: 4,
      coordinate: [2, 3],
    },
    {
      id: 11,
      location: "[성]블레니오 성",
      require_level: 4,
      coordinate: [2, 5],
    },
    {
      id: 12,
      location: "[성막]블렌 경비대",
      require_level: 4,
      coordinate: [3, 4],
    },
    {
      id: 13,
      location: "[성막]소리드 제 2성막",
      require_level: 4,
      coordinate: [2, 6],
    },
    {
      id: 14,
      location: "[들판]셀루우즈 곡창지대",
      require_level: 5,
      coordinate: [3, 6],
    },
    {
      id: 15,
      location: "[사막]카바스 사막",
      require_level: 5,
      coordinate: [4, 6],
    },
    {
      id: 16,
      location: "[강가]오아시스",
      require_level: 5,
      coordinate: [4, 7],
    },
    {
      id: 17,
      location: "[던전]환각의 피라미드",
      require_level: 5,
      coordinate: [5, 7],
    },
    {
      id: 18,
      location: "[성]리우센 성지",
      require_level: 5,
      coordinate: [4, 8],
    },
    { id: 19, location: "[강가]코나 강", require_level: 6, coordinate: [2, 7] },
    {
      id: 20,
      location: "[마을]테제인 산업지구",
      require_level: 6,
      coordinate: [1, 7],
    },
    {
      id: 21,
      location: "[던전거리]포스페어 거리",
      require_level: 6,
      coordinate: [0, 7],
    },
    {
      id: 22,
      location: "[던전]소티에즈 골목",
      require_level: 6,
      coordinate: [0, 6],
    },
    {
      id: 23,
      location: "[던전]미케니의 길",
      require_level: 6,
      coordinate: [-1, 7],
    },
    {
      id: 24,
      location: "[던전]데바트 동굴",
      require_level: 6,
      coordinate: [0, 8],
    },
  ];

  const moveMap = (id) => {
    console.log(id);
    setCurrentLocation(id);
  };

  const searchMap = (x, y) => {
    if (
      mapLocations.filter(function (el) {
        return el.coordinate[0] === x - 1 && el.coordinate[1] === y;
      })[0]
    ) {
      return true;
    } else {
      return false;
    }
  };

  const searchedMap = (x, y) => {
    return mapLocations.filter(function (el) {
      return el.coordinate[0] === x - 1 && el.coordinate[1] === y;
    })[0];
  };

  return (
    <div className="map">
      {new Array(7).fill(0).map((el1, ind1) => (
        <div className="mapFlex">
          {new Array(9).fill(0).map((el2, ind2) => (
            <div>
              <div className="arrowFlex">
                <div
                  className={
                    searchMap(ind1, ind2)
                      ? currentLocation === searchedMap(ind1, ind2).id
                        ? "mapLocate currentMap"
                        : "mapLocate"
                      : "mapNone"
                  }
                  onClick={() =>
                    moveMap(searchMap(ind1, ind2) && searchedMap(ind1, ind2).id)
                  }
                >
                  {searchMap(ind1, ind2) && searchedMap(ind1, ind2).location}
                </div>
                <div className="arrowRight"></div>
              </div>
              <div className="arrowBottom"></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Map;
