'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const boxVariants = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    },
    hidden: {
        opacity: 0,
        scale: 0
    }
};
const ImageComponent = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <div className="flex-1 flex items-center justify-center ">
            <motion.div
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                exit="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <Image src="https://picsum.photos/700/500" width={700} height={500} alt="image" />
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolore dolorem eligendi esse eveniet
                    exercitationem explicabo harum illo, in incidunt libero maxime nam, natus, quasi quibusdam quo
                    sapiente sed sit.
                </div>
            </motion.div>
        </div>
    );
};
const Box = ({ num }: { num: number }) => {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: true
    });
    return (
        <div className="flex w-full">
            <motion.div
                className="w-full h-full items-center flex flex-col px-32 py-12 gap-4"
                ref={ref}
                variants={boxVariants}
                initial="hidden"
                exit="hidden"
                animate={inView ? 'visible' : 'hidden'}
            >
                <div className="flex rounded-full w-full h-24 bg-amber-200 items-center justify-center">sss</div>
                <div className="flex rounded-full w-full h-24 bg-amber-200 items-center justify-center">sss</div>
                <div className="flex rounded-full w-full h-24 bg-amber-200 items-center justify-center">sss</div>
                <div className="flex rounded-full w-full h-24 bg-amber-200 items-center justify-center">sss</div>
                <div className="flex rounded-full w-full h-24 bg-amber-200 items-center justify-center">sss</div>
            </motion.div>
        </div>
    );
};

const Home = () => {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.5;
            return {
                pathLength: 1,
                opacity: 1,
                transition: {
                    pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                    opacity: { delay, duration: 0.01 }
                }
            };
        }
    };
    return (
        <div className="px-4 h-full w-screen flex flex-col max-w-6xl m-auto">
            <ImageComponent />

            {/* <motion.svg width="100" height="100" viewBox="0 0 600 600" initial="hidden" animate="visible"> */}
            {/*    <motion.line */}
            {/*        strokeWidth={20} */}
            {/*        strokeLinecap="round" */}
            {/*        x1="220" */}
            {/*        y1="30" */}
            {/*        x2="360" */}
            {/*        y2="170" */}
            {/*        stroke="#00cc88" */}
            {/*        variants={draw} */}
            {/*        custom={1} */}
            {/*    /> */}
            {/*    <motion.line */}
            {/*        strokeWidth={20} */}
            {/*        strokeLinecap="round" */}
            {/*        x1="220" */}
            {/*        y1="170" */}
            {/*        x2="360" */}
            {/*        y2="30" */}
            {/*        stroke="#00cc88" */}
            {/*        variants={draw} */}
            {/*        custom={1.5} */}
            {/*    /> */}
            {/* </motion.svg> */}
            {/* <h1>PAGE PATH 경로</h1> */}
            {/* <List className="mt-4"> */}
            {/*    <li> */}
            {/*        <Link className="underline underline-offset-2 font-medium text-xl text-blue-400" href="/notice"> */}
            {/*            공지사항 header & footer */}
            {/*        </Link> */}
            {/*    </li> */}

            {/*    <li> */}
            {/*        <Link className="underline underline-offset-2 font-medium text-xl text-blue-400" href="/something"> */}
            {/*            서버시간 ISR 테스트용 header */}
            {/*        </Link> */}
            {/*    </li> */}
            {/*    <li> */}
            {/*        <Link className="underline underline-offset-2 font-medium text-xl text-blue-400" href="/my"> */}
            {/*            싱글페이지 WithAuth */}
            {/*        </Link> */}
            {/*    </li> */}
            <Box num={1} />
            <Box num={2} />
            <Box num={3} />
            <Box num={4} />

            {/* </List> */}
        </div>
    );
};

export default Home;
