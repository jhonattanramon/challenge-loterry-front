import  {  useEffect, useState } from "react";
import ComboBox from "../../components/ComboBox";
import NumberResultPrizeDraw from "../../components/NumberResultPrizeDraw";
import valuesComboBox from "../../valuesComboBox.json";
import "./style.css";
import { getResultLatest } from "../../api/prizeDrawRequests";
import colorsSorts from "../../style/colors_sorts";

interface TypeStatePrizeDraw {
  lottery: string;
  numbers: string[];
  contest: number;
  dateContest: string;
}

const PageResultPrizeDraw = () => {
  const [stateResultPrizeDraw, setStateResultPrizeDraw] =
    useState<TypeStatePrizeDraw>({
      lottery: "megasena",
      contest: 0,
      dateContest: "",
      numbers: [],
    } as TypeStatePrizeDraw);

  // const [historyLottery, setHistoryLottery] = React.useState<Contest[]>([]);

  // const [visibilityModal, setVisibilityModal] = React.useState<boolean>(false);

  // function updateVisibilityModal(state: boolean) {
  //   setVisibilityModal(state);
  // }

  function updateLottery(lottery: string) {
    setStateResultPrizeDraw((prevState) => ({
      ...prevState,
      lottery,
    }));
  }

  function updateStateResultPrizeDraw({
    contest,
    dateContest,
    lottery,
    numbers,
  }: TypeStatePrizeDraw) {
    setStateResultPrizeDraw((prevState) => ({
      ...prevState,
      contest,
      dateContest: dateContest,
      lottery,
      numbers,
    }));
  }

  useEffect(() => {
    (async () => {
      await getResultLatest(stateResultPrizeDraw.lottery).then(
        ({
          concurso: contest,
          data: dateContest,
          loteria: lottery,
          dezenas: numbers,
        }) => {
          updateStateResultPrizeDraw({
            contest,
            dateContest,
            lottery,
            numbers,
          });
        }
      );

      // await getResultLottery(stateResultPrizeDraw.lottery).then((res) =>
      //   setHistoryLottery(res)
      // );  
    })();
  }, [stateResultPrizeDraw.lottery]);


  return(
    <>
      {/* <ProviderModal
        updateModal={updateVisibilityModal}
        visibility={visibilityModal}
      >
        <Suspense fallback={
        <div style={{
          display: 'flex',
          flex:1,
          justifyContent: 'center',
          alignItems:"center"
        }}>
          <p>
            Loading...
          </p>
        </div>}>
          {historyLottery.map((contest, index) => (
            <CardHistoryLoterry key={index} contest={contest} />
          ))}
        </Suspense>
        
      </ProviderModal> */}

      <div className="pageResultPrizeDraw">
        <header
          className="headerPageResultPrizeDraw"
          style={{
            backgroundColor:
              colorsSorts[stateResultPrizeDraw.lottery as "mega_sena"],
          }}
        >
          <div>
            <ComboBox options={valuesComboBox} updateLottery={updateLottery} />
          </div>
          <div>
            <h3>{stateResultPrizeDraw.lottery}</h3>
          </div>
          <div className="containerContest">
            <p>concurso</p>
            <div className="containerContestValue">
              <div className="contest">
                <h3>{stateResultPrizeDraw.contest}</h3>
              </div>
              <div className="dateContest">
                <p>-</p>
                <h3>{stateResultPrizeDraw.dateContest}</h3>
              </div>
            </div>
          </div>

          <div className="styleCurveHeader"></div>
        </header>

        <main className="mainPageResultPrizeDraw">
          {/* <ImgButton
            onClick={() => updateVisibilityModal(true)}
            src="history.png"
            alt="icon history"
            className="buttonHistory"
          /> */}

          <div className="containerNumbersPrizeDraw">
                <NumberResultPrizeDraw numbers={stateResultPrizeDraw.numbers} />
          </div>
        </main>
      </div>
    </>
  )
};

export default PageResultPrizeDraw;
