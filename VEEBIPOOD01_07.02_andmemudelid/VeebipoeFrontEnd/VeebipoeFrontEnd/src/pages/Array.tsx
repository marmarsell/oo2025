//rfce

function Array() {

    const sonad = ["Elas", "Metsas", "Mutionu"];
    const autod = [
    {"mark": "BMW", "mudel": "i5", "year": 2015},
    {"mark": "Volkswagen", "mudel": "golf", "year": 2017},
    {"mark": "Audi", "mudel": "TT", "year": 2015},
    {"mark": "Mercedes", "mudel": "S", "year": 2012}
  ];

  return (
    <div>
        Array
        <br />
        {sonad.map(sona => <div key = {sona}>{"> " + sona}</div> )}
        <br />
        {autod.map(auto => 
        <div key = {auto.mark+auto.mudel}>
          {"> " + auto.mark} - {auto.mudel} ({auto.year})
        </div> )}
        <br />
    </div>
  )
}

export default Array