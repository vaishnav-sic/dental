const Filter = () => {

    return(
<>

<div className="w-full   px-4 py-3 bg-white inline-flex flex-col justify-start items-center gap-4">


 <div className="self-stretch flex flex-col justify-start md:justify-between md:items-center items-start gap-6">
        {/* Filters */}
            <div className="self-stretch py-3 border-t border-b border-gray-300 flex flex-col justify-start items-start gap-6">
                <div data-type="1" className="w-85  inline-flex justify-between items-center">
                    <button data-icon-only="False" data-label="true" data-left-icon="false" data-right-icon="true" data-size="Small" data-state="Default" data-style="Plain" data-type="Default" className="flex-1 px-4 py-2  outline-1 outline-offset-[-1px] outline-Colors-Token-Border-Black flex justify-center items-center gap-1.5"  >
                        <div className="text-center justify-center text-Colors-Token-Text-CONTRAST text-sm font-normal leading-none">Filters</div>
                        <div data-filled="false" className="w-4 h-4 relative">
                            <img src="/categoryimg/setting-5.svg" alt="" />
                        </div>
                    </button>
                    
                    {/* SORT BY POPULARITY */}
                    <div data-icon-only="False" data-label="true" data-left-icon="false" data-right-icon="false" data-size="Small" data-state="Default" data-style="Plain" data-type="Default" className="flex-1 px-4 py-2  border-r border-t border-b border-Colors-Token-Border-Black flex justify-center items-center gap-1.5">
                        <div className="text-center justify-center text-Colors-Token-Text-CONTRAST text-sm font-normal  leading-none">SORT BY: Popularity</div>
                    </div>
                </div>

                <div className="self-stretch inline-flex justify-start items-center gap-3">
                    {/* Filter  */}
                    <div data-icon-only="False" data-show-left-icon="false" data-show-right-icon="true" data-size="Small" className="p-2 bg-neutral-300 outline-1 outline-offset-[-1px] outline-Colors-Primitive-Neutral-700 flex justify-center items-center gap-2">

                        <div className="text-center justify-start text-Colors-Token-Text-CONTRAST-3 text-xs font-medium  leading-none">Filter</div>
                        <div data-filled="false" className="w-3 h-3 relative">
                            <img src="/categoryimg/close-circle.svg" alt="" />
                        </div>
                    </div>

                    {/* Clear ALL */}
                    <div className="text-center justify-center  text-xs font-normal  underline leading-none">Clear All</div>
                </div>
            </div>            
        </div>
</div>
</>

    );

};

export default Filter;