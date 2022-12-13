import { useState } from "react";

const Map = () => {
  const character_level = 1;
  const [currentLocation, setCurrentLocation] = useState(0);

  const mapLocations = [
    {
      id: 0,
      location: "🏡집",
      require_level: 1,
      coordinate: [0, 0],
      street: [1, 0],
    },
    {
      id: 1,
      location: "⛰마녀의 숲",
      require_level: 1,
      coordinate: [0, 1],
      street: [1, 0],
    },
    {
      id: 2,
      location: "🏞가파른 계곡",
      require_level: 1,
      coordinate: [0, 2],
      street: [1, 1],
    },
    {
      id: 3,
      location: "🧙그리무츠의 동굴",
      require_level: 1,
      coordinate: [0, 3],
      street: [0, 0],
    },
    {
      id: 4,
      location: "👨‍👩‍👧‍👦슈비즈 마을",
      require_level: 2,
      coordinate: [1, 2],
      street: [0, 1],
    },
    {
      id: 5,
      location: "🏞칼바람이 부는 언덕",
      require_level: 2,
      coordinate: [2, 2],
      street: [0, 1],
    },
    {
      id: 6,
      location: "⛰석양이 지는 숲",
      require_level: 2,
      coordinate: [2, 1],
      street: [1, 0],
    },
    {
      id: 7,
      location: "🧙이그스의 호수",
      require_level: 2,
      coordinate: [2, 0],
      street: [1, 0],
    },
    {
      id: 8,
      location: "👨‍👩‍👧‍👦오르메인 마을",
      require_level: 3,
      coordinate: [3, 2],
      street: [1, 0],
    },
    {
      id: 9,
      location: "🏞프레이스 들판지대",
      require_level: 3,
      coordinate: [3, 3],
      street: [0, 0],
    },
    {
      id: 10,
      location: "🏰소리드 제 1성막",
      require_level: 4,
      coordinate: [2, 3],
      street: [1, 1],
    },
    {
      id: 11,
      location: "🏰블레니오 성",
      require_level: 4,
      coordinate: [2, 4],
      street: [1, 1],
    },
    {
      id: 12,
      location: "🏰블렌 경비대",
      require_level: 4,
      coordinate: [3, 4],
      street: [0, 0],
    },
    {
      id: 13,
      location: "🏰소리드 제 2성막",
      require_level: 4,
      coordinate: [2, 5],
      street: [1, 1],
    },
    {
      id: 14,
      location: "🏞셀루우즈 곡창지대",
      require_level: 5,
      coordinate: [3, 5],
      street: [0, 1],
    },
    {
      id: 15,
      location: "🏜카바스 사막",
      require_level: 5,
      coordinate: [4, 5],
      street: [1, 0],
    },
    {
      id: 16,
      location: "🏝오아시스",
      require_level: 5,
      coordinate: [4, 6],
      street: [1, 1],
    },
    {
      id: 17,
      location: "🧙환각의 피라미드",
      require_level: 5,
      coordinate: [5, 6],
      street: [0, 0],
    },
    {
      id: 18,
      location: "🏰리우센 성지",
      require_level: 5,
      coordinate: [4, 7],
      street: [0, 0],
    },
    {
      id: 19,
      location: "🌊코나 강",
      require_level: 6,
      coordinate: [2, 6],
      street: [0, 0],
    },
    {
      id: 20,
      location: "👨‍👩‍👧‍👦테제인 산업지구",
      require_level: 6,
      coordinate: [1, 6],
      street: [0, 1],
    },
    {
      id: 21,
      location: "💂‍♂️포스페어 거리",
      require_level: 6,
      coordinate: [0, 6],
      street: [1, 1],
    },
    {
      id: 22,
      location: "🧙소티에즈 골목",
      require_level: 6,
      coordinate: [0, 5],
      street: [1, 0],
    },
    {
      id: 23,
      location: "🧙미케니의 길",
      require_level: 6,
      coordinate: [-1, 6],
      street: [0, 1],
    },
    {
      id: 24,
      location: "🧙데바트 동굴",
      require_level: 6,
      coordinate: [0, 7],
      street: [0, 0],
    },
  ];

  const moveMap = (id) => {
    console.log(id);
    if (id !== false) {
      setCurrentLocation(id);
    }
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
                {searchMap(ind1, ind2) &&
                searchedMap(ind1, ind2).street[0] === 1 ? (
                  <div className="arrowRight"></div>
                ) : (
                  <div className="arrowRightNone"></div>
                )}
              </div>
              {searchMap(ind1, ind2) &&
              searchedMap(ind1, ind2).street[1] === 1 ? (
                <div className="arrowBottom"></div>
              ) : (
                <div className="arrowBottomNone"></div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default Map;
