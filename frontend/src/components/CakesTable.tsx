import React from 'react';
import { Image, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { CakeData } from '../api/CakeApi';
import { LoadStatus } from '../util/PageUtils';
import { DeleteCell, EditCell, HeaderCell, NoDataRow, SpinnerRow } from '../util/TableUtil';

interface Props {
  status: LoadStatus;
  cakeList: CakeData[];
  onDelete: (id: string) => void;
}

const CakesTable = ({ cakeList, status, onDelete }: Props) => {
  const history = useHistory();

  return (
    <Table bordered hover size="sm" style={{ minHeight: '100px' }}>
      <caption style={{ captionSide: 'top', paddingTop: 0 }}>List of cakes</caption>

      <thead className="thead-light">
        <tr>
          <HeaderCell width="5%" title="#" />
          <HeaderCell width="20%" title="Name" />
          <HeaderCell width="20%" title="Comment" />
          <HeaderCell width="10%" title="Yum Factor" />
          <HeaderCell title="Image" className="text-center" />
          <HeaderCell width="5%" title="Edit" className="text-center" />
          <HeaderCell width="7%" title="Delete" className="text-center" />
        </tr>
      </thead>
      {status === LoadStatus.LOADING ? (
        <tbody>
          <SpinnerRow />
        </tbody>
      ) : !cakeList || cakeList.length === 0 ? (
        <tbody>
          <NoDataRow />
        </tbody>
      ) : (
        cakeList.map((cake: any, index: number) => {
          return (
            <React.Fragment key={cake._id}>
              <tbody>
                <tr>
                  <td>{index + 1}</td>
                  <td>{cake.name}</td>
                  <td>{cake.comment}</td>
                  <td>{cake.yumFactor}</td>
                  <td className="text-center">
                    <Image src={cake.imageUrl} width="200px" />
                  </td>
                  <EditCell onClick={() => history.push(`/cakes/${cake._id}`)} />
                  <DeleteCell onClick={() => onDelete(cake._id)} />
                </tr>
              </tbody>
            </React.Fragment>
          );
        })
      )}
    </Table>
  );
};

export default CakesTable;
