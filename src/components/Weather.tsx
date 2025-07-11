import React from 'react';

const Weather = () => {
    return (
        <div
            className="relative animate-spin-slow"
            style={
                {
                    animation: 'spin 4s linear infinite',
                    ['--color' as any]: 'yellow',
                    ['--scale' as any]: '0.4',
                } as React.CSSProperties
            }
        >
            <div
                className="rounded-full shadow-[0_0_calc(var(--scale)_*3em)_var(--color)]"
                style={{
                    width: 'calc(var(--scale)*10em)',
                    height: 'calc(var(--scale)*10em)',
                    backgroundColor: 'var(--color)',
                    borderRadius: '50%',
                }}
            ></div>

            {/* Rays */}
            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)]"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*4.75em)',
                    marginTop: 'calc(var(--scale)*1em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] rotate-90"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*12.25em)',
                    marginTop: 'calc(var(--scale)*-6.25em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)]"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*4.75em)',
                    marginTop: 'calc(var(--scale)*-14em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] rotate-90"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*-2.75em)',
                    marginTop: 'calc(var(--scale)*-6.25em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] rotate-45"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*-0.5em)',
                    marginTop: 'calc(var(--scale)*-1em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] -rotate-45"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*9.75em)',
                    marginTop: 'calc(var(--scale)*-1em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] rotate-45"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*10.25em)',
                    marginTop: 'calc(var(--scale)*-11.75em)',
                }}
            ></div>

            <div
                className="absolute bg-[var(--color)] shadow-[0_0_calc(var(--scale)_*1em)_var(--color)] -rotate-45"
                style={{
                    width: 'calc(var(--scale)*0.5em)',
                    height: 'calc(var(--scale)*3em)',
                    marginLeft: 'calc(var(--scale)*-0.5em)',
                    marginTop: 'calc(var(--scale)*-11.75em)',
                }}
            ></div>
        </div>
    );
};

export default Weather;
