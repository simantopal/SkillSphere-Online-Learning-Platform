import jhankarvai from "@/assets/jhankarVai.jpeg"
import simanto from "@/assets/Myself.png"
import Image from "next/image";

const TopInstructors = () => {
    return (
        <div className="container mx-auto my-16 p-6">
            <h2 className="text-3xl font-bold text-center mb-10">🏆 Top Instructors</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-base-200 p-5 rounded-xl shadow text-center">
                    <Image
                        src={jhankarvai}
                        alt="Jhankar Vai"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-3 object-cover"
                    />
                    <h3 className="font-semibold">Jhonkar Mahabub</h3>
                    <p className="text-sm opacity-70">Web Development Expert</p>
                </div>

                <div className="bg-base-200 p-5 rounded-xl shadow text-center">
                    <Image
                        src={jhankarvai}
                        alt="Jhankar Vai"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-3 object-cover"
                    />
                    <h3 className="font-semibold">Sarah Khan</h3>
                    <p className="text-sm opacity-70">UI/UX Designer</p>
                </div>

                <div className="bg-base-200 p-5 rounded-xl shadow text-center">
                    <Image
                        src={simanto}
                        alt="simanto"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-3 object-cover"
                    />
                    <h3 className="font-semibold">Simanto Paul</h3>
                    <p className="text-sm opacity-70">Full Stack Developer</p>
                </div>

                <div className="bg-base-200 p-5 rounded-xl shadow text-center">
                    <Image
                        src={jhankarvai}
                        alt="Jhankar Vai"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto mb-3 object-cover"
                    />
                    <h3 className="font-semibold">Mike Smith</h3>
                    <p className="text-sm opacity-70">Digital Marketing</p>
                </div>

            </div>
        </div>
    );
};

export default TopInstructors;