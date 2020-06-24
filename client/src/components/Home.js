import React from 'react';
import MediaCard from './MediaCard.jsx';

const Home = () => {
    return (
        <div style={{display:'flex'}}>
            <MediaCard
            image="https://s3-alpha-sig.figma.com/img/0082/51f6/5877dcffd84643448a1b0fb88d4a99a8?Expires=1593993600&Signature=TLXvg~qecv-Q56jZw9DHQ2j5z6fh0KH4Z04LxTpu7-eCaNsx9sWwbqXEDAZWse2tucxybk7WrOVpjG8QvDrHjiIpQpc4hbKCqDmaunjKI~3P4q5ocjKO~Q21asWufnCxXeaMDT5n2rMWgazXkFr-AN4iCcwlSrt1eiiFtbIXRkoBtMwWzyw98KDMP50SMWlqPGrSQN71kp-IvXZCHxdIbbaewrjTDhN6LRIZ5Fe0tNFIGEQk2-32kzLixtwtm23EowBwlV6odGevlkQ-SA7u1BKG6aXcFYsZ-kz6ny9h0DpqgHlvc2ioJSjb6CCa0dq22cSR5tM8gIodnt5gUqfVBg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            choice="I took a risk"
            description="You took a risk and you’re wondering if you got HIV. Don’t panic and tell us everything"
            />
            
            <MediaCard
            image="https://s3-alpha-sig.figma.com/img/d9eb/fe98/5e2299e366130d380e409f7dd920d70a?Expires=1593993600&Signature=dvwGY1kgQ5QIe1kHDb18QutuBM4o2F1w5g05D7C97vD~1Gou7sX93tHtIhisaIDeabF28L1lPNYEJCXQe4fkgvlrptAAfOM85XElGj14zr785DT9UdYMRDWZbjValkfWd94qRmIDsnMkFS18IBKitNC8SqGyqbVL6eSLpklTG9E2BhMnGysNGi8Xio4RWeTvvf0sgBmqx5VfUCXsRfHuqTY-z-dk6qBmE9~9omXwbwXK~vLiTahcS9YON~fgqmJ2so3Ps2e5qmYcotBZu08aHZ2-duxUHZyCl2YjdPt2nyw63ckleqoZJiaW48BNpJ5ia~KLeH~vMLLDizIS~DtCkg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            choice="I want to plan a test."
            description="We’re here to help you to find a doctor in order to test you and accompany you during the process"
            />

            <MediaCard
            image="https://s3-alpha-sig.figma.com/img/096e/e918/d5d1771e221d3739f6807e0627b78e2f?Expires=1593993600&Signature=AU7UdECkKtcQvq6Hvd61Pz1jiv6J1dl-SdxQE7LjL8icJwZk3ouaiG1JHY6-vLInZd-qv90iUd3dBzG6k7owuoSFrCuIof3xelw7aBCkqIjA1ooMFlTRvSz~-A7qSmQiRi-Buq5Rkbyph5FBTKSzdoUW7-dA2qcrqS2emcfz84npYpWtItSYahhBVe9XI29Pf8DLK-zrQyLDNgKESPndSk7A8GZcC0j0Rt500oJX3d9OVC92hXaRdiGkw3YGW4-~55fgUFyzY8WmI38WA3FUziNgJ4JcG6fP8BL6JrPYvnV~dcv47M5kNY5JdBAQxMI-EDky3~SDSrEFnGZzSFt~cw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            choice="I’m taking Prep or PEP to prevent HIV"
            description="You’re taking a prevention treatment such like PEP or PREP. Timing is crucial in order to stop HIV!! Use our tool to plan and manage your treatment."
            />

            <MediaCard
            image="https://s3-alpha-sig.figma.com/img/2b5c/e1d9/5d257941d9ec951cf4059e27df3efa0c?Expires=1593993600&Signature=QlH73XKB-PD4axF2UCIVz84XFN5H-kZGXPBsP9uyxiH~DRDh286HfgC6jD7E4lNwxrE4ax7ZPycNatb4Qjhrn6TS4oc-yfMZ~YB9IV8lRQdE7kVYxYdYrzywEfs30zcgpUwpMXO3P7hur3xJQn2HGxf84V1g4ZoNc5rJE8rDSU8r96g~cU53yxkX4sRNfkkAqGKXrPkpCXW4ay3IpLvW1PN2tDUxZRKhHtDm-Fn9hlNBfJwzwIFZp4XT~TeUab0sYoviipx5V7iOtfSwiaVZrPnzDk-erGV33iE9T~tnKVDRuruHP63SRqHhG3Xw8s13pbNuwQorigGcl-Horg~Npg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            choice="I follow a triple therapy"
            description="You follow a triple therapy. We can help you to manage your treatment efficiently on time whereever you are."
            />
        </div>
    )
}

export default Home;