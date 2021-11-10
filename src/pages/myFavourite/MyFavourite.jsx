import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./myFavourite.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';

export default function MyFavourite() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'pro',
          headerName: 'Product',
          width: 200,
          renderCell: (params) => {
            return (
              <div className="productListProduct">
                <img className="productListImage" src={params.row.productImg} alt=""/>
                {params.row.product}
              </div>

            )
          } 
        },
        {
          field: 'category',
          headerName: 'Category',
          width: 150,
          editable: true,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 110,
          editable: true,
        },
        {
          field: 'merchant',
          headerName: 'Brand',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <button className="productListBuy">Buy</button>
                <DeleteOutline className="productListDelete"/>
              </>
            )
          }
        },
      ];
      
      const rows = [
        { id: 1, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 2, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 3, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 4, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 5, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 6, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 7, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 8, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 9, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
        { id: 10, 
          product: 'Jonson Baby Oil', 
          productImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdHHF9moFrrBTVWBc4qvU4qaP29Rd23deymA&usqp=CAU",
          category: 'Oil', 
          price: '$35', 
          merchant: 'Jonson' 
        },
      ];

    return (
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <div className="productList">
              <DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
          </div>
        </div>
      </> 
    )
}