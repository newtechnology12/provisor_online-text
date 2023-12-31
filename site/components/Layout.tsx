import { useRouter } from "next/router";
import { Fragment } from "react";
import { useAuth } from "../context/authContext";
import Footer from "./Footer";
import LearnLayout from "./LearnLayout";
import Loader from "./Loader";
import Navbar from "./Navbar";
import ScreenLoader from "./ScreenLoader";
export const Layout = ({ children }: any) => {
  const router = useRouter();
  const { user, loading } = useAuth();

  return (
    <Fragment>
      {!user && loading && router.pathname.split("/").includes("learn") ? (
        <ScreenLoader />
      ) : (
        <>
          <Navbar />
          <div
            className={`${
              router.pathname.split("/").includes("learn") ? "" : "pt-[59px]"
            } sm:pt-[50px] min-h-[83vh] sm:pb-[10px] pb-[0px] `}
          >
            {router.pathname.split("/").includes("auth") ? (
              <Fragment>{children}</Fragment>
            ) : router.pathname.split("/").includes("learn") ? (
              <LearnLayout>
                <div>
                  {user && !loading && <Fragment> {children}</Fragment>}

                  {!user && loading && (
                    <div className="w-full h-[60vh] flex items-center justify-center">
                      <Loader primary />
                    </div>
                  )}
                </div>
              </LearnLayout>
            ) : (
              <Fragment> {children}</Fragment>
            )}
          </div>
          <Footer />
        </>
      )}
    </Fragment>
  );
};
