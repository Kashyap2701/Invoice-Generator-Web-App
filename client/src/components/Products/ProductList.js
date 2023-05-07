import React from 'react'
import AddProduct from './AddProduct'
import Products from './Products'

function ProductList() {

    const history = useHistory()
    const location = useLocation()
    const [open, setOpen] = useState(false)
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem('profile'))
    const {clients} = useSelector((state) => state.clients)
    const isLoading = useSelector(state => state.clients.isLoading)

    useEffect(() => {
        dispatch(getClientsByUser({ search: user?.result?._id || user.result.googleId }));
      },[location, dispatch])
    
      if(!user) {
        history.push('/login')
      }
    
      
      if(isLoading) {
        return  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px'}}>
            <Spinner />
        </div>
      }
    
      if(clients.length === 0) {
        return  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px', margin: '80px'}}>
          <NoData />
        <p style={{padding: '40px', color: 'gray', textAlign: 'center'}}>No customers yet. Click the plus icon to add customer</p>
      
        </div>
    }


    return (
        <div>
            <AddProduct
                open={open} 
                setOpen={setOpen}
                currentId={currentId}
                setCurrentId={setCurrentId}
            />
            <Products
                open={open} 
                setOpen={setOpen}
                currentId={currentId}
                setCurrentId={setCurrentId}
                clients={clients}
            />
        </div>
    )
}

export default ProductList