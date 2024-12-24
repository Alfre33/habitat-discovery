
export const HabitatMap = () => {
  return (
    <section className="bg-white shadow-lg w-10/12 rounded-xl">
    <div className="w-full mx-auto py-3 px-4 md:px-3 lg:py-3 lg:px-3">
    
        <div className="mt-2">
            <div className="grid grid-cols-1 w-full">
                <div className="rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                        // width="100%" height="400" 
                        className="h-72 md:h-80 lg:h-96 w-full"
                        // style="border:0;" allowfullscreen="" 
                        loading="lazy"></iframe>
                {/* </div>
                <div> */}
                    {/* <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div className="px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Our Address</h3>
                            <p className="mt-1 text-gray-600">123 Main St, San Francisco, CA 94105</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                            <p className="mt-1 text-gray-600">Monday - Friday: 9am - 5pm</p>
                            <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                            <p className="mt-1 text-gray-600">Sunday: Closed</p>
                        </div>
                        <div className="border-t border-gray-200 px-6 py-4">
                            <h3 className="text-lg font-medium text-gray-900">Contact</h3>
                            <p className="mt-1 text-gray-600">Email: info@example.com</p>
                            <p className="mt-1 text-gray-600">Phone: +1 23494 34993</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
</section>
  )
}
