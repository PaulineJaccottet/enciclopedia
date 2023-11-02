import Card from "./Card";
import entriesList from "./Entries";
import "./List.css";

const List = () => {
    return (
        <div>
            < Card
                family={entriesList[0].family}
                title={entriesList[0].title}
                snippet={entriesList[0].snippet}
                description={entriesList[0].description}
                documentation_link={entriesList[0].documentation_link}
                documentation_title={entriesList[0].documentation_title}
            />

            < Card
                family={entriesList[1].family}
                title={entriesList[1].title}
                snippet={entriesList[1].snippet}
                description={entriesList[1].description}
                documentation_link={entriesList[1].documentation_link}
                documentation_title={entriesList[1].documentation_title}
            />
        </div>
    )
}

export default List