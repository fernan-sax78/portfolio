import './globals.css'
//import { Inter } from 'next/font/google';
import { useMessages , NextIntlClientProvider} from "next-intl";

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'titodev Portfolio',
  description: 'Created to look for great opportunities in web development',
}

export default function LocaleLayout({ children , params }) {
    const messages = useMessages();
  return (
    <html lang= {params.locale}>
      <body>
        <NextIntlClientProvider  locale = {params.locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
