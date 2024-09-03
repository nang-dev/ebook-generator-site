import Logo from './logo'

// Use environment variable for the API URL
const apiUrl: string =
  process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

// Use environment variable for the API URL
const frontendUrl: string =
process.env.NEXT_PUBLIC_FRONTEND_URL || "http://127.0.0.1:3000";

const tocUrl: string = frontendUrl+"/toc"


export default function Footer() {
  return (
    <footer className="w-full text-center border-t py-4">
      <p className="text-sm text-gray-600">
        By using this website, you are agreeing to the
        <a href={tocUrl} className="text-blue-600 hover:underline"> Terms and Conditions</a> of the website.
      </p>
    </footer>
  )
}
