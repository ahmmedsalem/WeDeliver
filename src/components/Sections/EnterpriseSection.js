import { FormattedMessage } from "react-intl";

const EnterpriseSection = () => {
  return (
    <>
      <div className="bg-dark">
        <div className="container mx-auto justify-around lg:px-8 px-4 lg:flex pt-16 pb-4">
          <div className="lg:w-1/2 self-center my-8">
            <img
              src={require(`../../assets/images/enterprise.jpg`)}
              alt="Car"
            />
          </div>
          <div className="flex flex-col lg:w-2/5 self-center">
            <h2 className="text-center text-gray-300 text-xl my-4 font-bold lg:text-xl lg:text-left lg:rtl:text-right">
              <FormattedMessage
                id="homePage.enterpriseSection.title"
                defaultMessage="homePage.enterpriseSection.title"
              />
            </h2>
            <h2 className="text-center text-white text-xl font-bold lg:text-3xl lg:text-left lg:rtl:text-right leading-10">
              <FormattedMessage
                id="homePage.enterpriseSection.subtitle"
                defaultMessage="homePage.enterpriseSection.subtitle"
              />
            </h2>
            <p className="text-gray-300 text-bold lg:rtl:text-right">
              <FormattedMessage
                id="homePage.enterpriseSection.content"
                defaultMessage="homePage.enterpriseSection.content"
              />
            </p>
            <button className="p-4 w-100 text-sm font-semibold text-white mt-12 bg-mainOrange rounded shadow-md border-2 border-none md:text-base">
              <FormattedMessage
                id="homePage.enterpriseSection.button"
                defaultMessage="homePage.enterpriseSection.button"
              />
            </button>
          </div>
        </div>
        <div className="partners-section grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-16 gap-y-12 container px-8 lg:px-16 mx-auto pb-16">
          <div className="w-1/6 self-center items-center">
            <img
              src={require(`../../assets/images/logos/amazon.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/kfc.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/ph.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/aramex.png`)}
              alt="Car"
              className="max-w-[9rem]"
            />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/kw.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
          <div className="w-1/6 self-center">
            <img
              src={require(`../../assets/images/logos/sh.png`)}
              className="max-w-[9rem]"
              alt="Car"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterpriseSection;