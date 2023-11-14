function Category(props) {
    return ( <>
       <div className="border-2 w-1/3 flex flex-col items-center justify-center  rounded-lg border-green-500">
        <div className="text-center">
        <img className="h-24"  src={props.image} alt="" />
        </div>
        <div>{props.heading}</div>
       </div>
    </> );
}

export default Category;