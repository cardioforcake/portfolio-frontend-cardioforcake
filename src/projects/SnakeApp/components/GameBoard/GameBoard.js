import './GameBoard.css'
import Cell from './Cell/Cell'


function GameBoard(props){

    const board=[
        '1131','1231','1331','1431','1531','1631','1731','1831','1931', '2031', '2131', '2231', '2331','2431','2531','2631','2731','2831','2931','3031','3131',
        '1130','1230','1330','1430','1530','1630','1730','1830','1930', '2030', '2130', '2230', '2330','2430','2530','2630','2730','2830','2930','3030','3130',
        '1129','1229','1329','1429','1529','1629','1729','1829','1929', '2029', '2129', '2229', '2329','2429','2529','2629','2729','2829','2929','3029','3129',
        '1128','1228','1328','1428','1528','1628','1728','1828','1928', '2028', '2128', '2228', '2328','2428','2528','2628','2728','2828','2928','3028','3128',
        '1127','1227','1327','1427','1527','1627','1727','1827','1927', '2027', '2127', '2227', '2327','2427','2527','2627','2727','2827','2927','3027','3127',
        '1126','1226','1326','1426','1526','1626','1726','1826','1926', '2026', '2126', '2226', '2326','2426','2526','2626','2726','2826','2926','3026','3126',
        '1125','1225','1325','1425','1525','1625','1725','1825','1925', '2025', '2125', '2225', '2325','2425','2525','2625','2725','2825','2925','3025','3125',
        '1124','1224','1324','1424','1524','1624','1724','1824','1924', '2024', '2124', '2224', '2324','2424','2524','2624','2724','2824','2924','3024','3124',
        '1123','1223','1323','1423','1523','1623','1723','1823','1923', '2023', '2123', '2223', '2323','2423','2523','2623','2723','2823','2923','3023','3123',
        '1122','1222','1322','1422','1522','1622','1722','1822','1922', '2022', '2122', '2222', '2322','2422','2522','2622','2722','2822','2922','3022','3122',
        '1121','1221','1321','1421','1521','1621','1721','1821','1921', '2021', '2121', '2221', '2321','2421','2521','2621','2721','2821','2921','3021','3121',
        '1120','1220','1320','1420','1520','1620','1720','1820','1920', '2020', '2120', '2220', '2320','2420','2520','2620','2720','2820','2920','3020','3120',
        '1119','1219','1319','1419','1519','1619','1719','1819','1919', '2019', '2119', '2219', '2319','2419','2519','2619','2719','2819','2919','3019','3119',
        '1118','1218','1318','1418','1518','1618','1718','1818','1918', '2018', '2118', '2218', '2318','2418','2518','2618','2718','2818','2918','3018','3118',
        '1117','1217','1317','1417','1517','1617','1717','1817','1917', '2017', '2117', '2217', '2317','2417','2517','2617','2717','2817','2917','3017','3117',
        '1116','1216','1316','1416','1516','1616','1716','1816','1916', '2016', '2116', '2216', '2316','2416','2516','2616','2716','2816','2916','3016','3116',
        '1115','1215','1315','1415','1515','1615','1715','1815','1915', '2015', '2115', '2215', '2315','2415','2515','2615','2715','2815','2915','3015','3115',
        '1114','1214','1314','1414','1514','1614','1714','1814','1914', '2014', '2114', '2214', '2314','2414','2514','2614','2714','2814','2914','3014','3114',
        '1113','1213','1313','1413','1513','1613','1713','1813','1913', '2013', '2113', '2213', '2313','2413','2513','2613','2713','2813','2913','3013','3113',
        '1112','1212','1312','1412','1512','1612','1712','1812','1912', '2012', '2112', '2212', '2312','2412','2512','2612','2712','2812','2912','3012','3112',
        '1111','1211','1311','1411','1511','1611','1711','1811','1911', '2011', '2111', '2211', '2311','2411','2511','2611','2711','2811','2911','3011','3111',
 
    ]


    return(
            <div className="game-board">
                {board.map((cell, idx)=>{
                    let match = false;
                    let section = {}
                    let dir = ''
                    let head = false
                    props.snake.forEach(sec=>{
                        if(sec.loc=== cell){
                            match= true;
                            section=sec
                            dir=sec.dir
                            if(props.snake.indexOf(sec)===0){
                                head = true;
                            }
                        }
                    })
                    if(match){
                        if(head){
                            let headDir
                            switch(section.dir){
                                case 'up':
                                    headDir = 'up-head';
                                    break;
                                case 'down':
                                    headDir = 'down-head';
                                    break;
                                case 'left':
                                    headDir = 'left-head';
                                    break;
                                case 'right':
                                    headDir = 'right-head';
                                    break;
                                default:
                                    break; 
                            }
                            return <Cell status="fill" dir={headDir} name={cell} key={idx} section={section}/>
                        }else{
                            return <Cell status="fill" dir={dir} name={cell} key={idx} section={section}/>
                        }
                    }else if(cell===props.apple){
                        return <Cell status="apple" name={cell} key={idx} section={section}/>
                    }
                    else{
                        return <Cell status="empty" name={cell} key={idx}/>
                    }
                    // if (props.snake.includes(cell)){
                    //     return <Cell status="fill" name={cell}key={idx}/>
                    // }else{
                    //     return <Cell status="empty" name={cell} key={idx}/>
                    // }
                })}
            </div>
    );
}

export default GameBoard;