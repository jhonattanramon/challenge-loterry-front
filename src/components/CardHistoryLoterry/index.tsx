import NumberResultPrizeDraw from "../NumberResultPrizeDraw";
import "./style.css";
interface TypeCardHistoryLoterry {
  contest: Contest;
}

const CardHistoryLoterry: React.FC<TypeCardHistoryLoterry> = ({ contest }) => {
  return (
    <div className="containerCardHistory">
      <section className="headerCardHistory">
        <div>
          <span>
            {contest.loteria}
          </span>
          -
          <span>
            {contest.concurso}
          </span>
        </div>
        <div>
          <span>{contest.data}</span>
        </div>
      </section>

      <NumberResultPrizeDraw className="ball ballCardHistory" numbers={contest.dezenas} />
    </div>
  );
};

export default CardHistoryLoterry;
