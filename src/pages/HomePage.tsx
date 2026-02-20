import { HeroSection } from "../components/sections/HeroSection";
import { FeatureSection } from "../components/sections/FeatureSection";
import "./HomePage.css";

export function HomePage() {
  return (
    <main className="home-page">
      <HeroSection />

      <FeatureSection
        title="Write clear data documentation"
        imageAlt="Data documentation interface"
      >
        <p>
          Schemas work together with a dataset and describe data features such
          as column names, units, and descriptions etc.
        </p>
        <p>
          Using the schema tool of the Semantic Engine you can write human- and
          machine-readable schemas.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Build data sharing agreements"
        imageAlt="Data sharing agreement form"
      >
        <p>
          Running your own instance of the Data Request Tracker lets you manage
          requests for your restricted data with customized questionnaires.
        </p>
        <p>
          Use the answers to fill in your customized data agreement templates.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Write descriptive metadata"
        imageAlt="Metadata entry form"
      >
        <p>
          Describe your dataset, your research project, your sample library and
          more.
        </p>
        <p>
          Generate a metadata record in a machine-readable format by filling out
          forms.
        </p>
        <p>
          Customize the metadata records you generate when you run your own
          instance of our tool.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Collect verified data"
        imageAlt="Data verification interface"
      >
        <p>
          Customize the Semantic Engine tools to send verified data into your
          ETL pipelines.
        </p>
      </FeatureSection>

      <FeatureSection
        title="Standardize data collection"
        imageAlt="Standardized data collection"
      >
        <p>
          Generate standardized data entry sheets in Excel with your schema
          documentation directly included.
        </p>
        <p>
          Data collectors can reference the data documentation right in the
          Excel file.
        </p>
      </FeatureSection>
    </main>
  );
}
