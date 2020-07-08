import React, { } from 'react';
import CurrentDate from '../components/currentDate';
import SignOut from '../components/signOut';
import Table from '../components/table';


class ForSalePage extends React.Component {
  state = {
    blades: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/blades?access_token=5e3600914e63efce06c8cee3')
      .then(res => res.json())
      .then((data) => {
        this.setState({ blades: data })
      })
      .catch(console.log)
  }

  render() {

    const forSaleTrue = this.state.blades.filter(i => i.forSale === true);
    const renderForSale = forSaleTrue.map((i) =>

      <table className='container tableBackground showStopper'>
        <thead>
        </thead>
        <tbody>
          <tr>
            <td className='show1 shane'>{i.brand}</td>
            <td className='show1 shane'>{i.model}</td>
            <td className='show1 shane'>${i.forSalePrice}</td>
          </tr>
        </tbody>
      </table>
    );

    return (
      <div className='dashboard'>
        <SignOut />
        <div className='column1'>
          <h1 className='loginPageTitle'>BladeX</h1>
          <div className='dateStyling'>
            <CurrentDate date={Date()} />
          </div>
          <h3 className='dashboardTitle2'>ForSale</h3>
        </div>
        <p className='costOfcollection'>Amount for Sale:  </p>
        <p className='costOfCollectNum'>$25.00</p>
        <Table className='tableStyling' />
        <center><h2 className='allKnivesStyling'>Knives for Sale:</h2></center>
        <table className='container showStopper nice'>
          <tbody>
            <tr>
              <td className=''>Brand</td>
              <td className=''>Model</td>
              <td className=''>Price</td>
            </tr>
          </tbody>
        </table>
        {renderForSale}
      </div>
    );
  }
};

export default ForSalePage;