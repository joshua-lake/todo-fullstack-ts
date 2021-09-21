import { AppPropsType } from 'next/dist/shared/lib/utils'
import '../styles/globals.css'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function MyApp({ Component, pageProps }: AppPropsType) {
  return (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
  )
}

export default MyApp

