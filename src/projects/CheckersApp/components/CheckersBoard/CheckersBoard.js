import parse from 'html-react-parser'
import styles from './CheckersBoard.module.css'
import './CheckersBoard.css'
import cx from 'classnames'

function CheckersBoard(props){

    const cellTypes ={
      'bpawn': '<td class=dark><img src="https://i.imgur.com/3Virlum.png" className="img"></td>',
      'rpawn': '<td class=dark><img src="https://i.imgur.com/g9kfr4z.png" className="img"></td>',
      'empty': '<td class=dark></td>',
    }
    return(
        <table>
        <tr>
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['82']])}
          {/* <td id='82' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['84']])}
          {/* <td id='84' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['86']])}
          {/* <td id='86' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['88']])}
          {/* <td id='88' class='dark'>
          </td> */}
        </tr>
        <tr>
          {parse(cellTypes[props.locTracker['71']])}
          {/* <td id='71' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['73']])}
          {/* <td id='73' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['75']])}
          {/* <td id='75' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['77']])}
          {/* <td id='77' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
        </tr>
        <tr>
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['62']])}
          {/* <td id='62' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['64']])}
          {/* <td id='64' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['66']])}
          {/* <td id='66' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['68']])}
          {/* <td id='68' class='dark'>
          </td> */}
        </tr>
        <tr>
          {parse(cellTypes[props.locTracker['51']])}
          {/* <td id='51' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['53']])}
          {/* <td id='53' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['55']])}
          {/* <td id='55' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['57']])}
          {/* <td id='57' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
        </tr>
        <tr>
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['42']])}
          {/* <td id='42' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['44']])}
          {/* <td id='44' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['46']])}
          {/* <td id='46' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['48']])}
          {/* <td id='48' class='dark'>
          </td> */}
        </tr>
        <tr>
          {parse(cellTypes[props.locTracker['31']])}
          {/* <td id='31' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['33']])}
          {/* <td id='33' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['35']])}
          {/* <td id='35' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['37']])}
          {/* <td id='37' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
        </tr>
        <tr>
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['22']])}
          {/* <td id='22' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['24']])}
          {/* <td id='24' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['26']])}
          {/* <td id='26' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['28']])}
          {/* <td id='28' class='dark'>
          </td> */}
        </tr>
        <tr>
          {parse(cellTypes[props.locTracker['11']])}
          {/* <td id='11' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['13']])}
          {/* <td id='13' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['15']])}
          {/* <td id='15' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
          {parse(cellTypes[props.locTracker['17']])}
          {/* <td id='17' class='dark'>
          </td> */}
          <td className={"light"}>
          </td>
        </tr>
      </table>
    );
};

export default CheckersBoard