import React, {Suspense} from "react";
import Preloader from "../Preloader/Preloader";

const withSuspense = (WrappedComponent: any) => {
    return (props: any) => {
        return (
            <Suspense fallback={<Preloader showPreloader={true}/>}>
               <WrappedComponent {...props}/>
           </Suspense>
        )
    }
};

export default withSuspense;
