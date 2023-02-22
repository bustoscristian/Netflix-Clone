import { NetflixHome } from "./home/NetflixHome"
import { AppRouter } from "./router/AppRouter"


export const NetflixApp = () => {
  return (
    <>
      <AppRouter />
      <NetflixHome />
    </>
  )
}
