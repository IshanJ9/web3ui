import {formatDate} from "@/lib/utils"
import { urlFor } from "@/lib/imageUrl";
import { Author, Survey } from "@/sanity/types";
import Link from "next/link";

export type SurveyTypeCard = Omit<Survey, "author"> &{author?: Author}

const SurveyCard = ({ post }: { post : SurveyTypeCard}) => {
    const { _createdAt,
            title,
            category,
            _id,
            image,
            description, } = post;
    return (
        <li className="survey-card group">
          <div className="flex-between">
            <p className="survey_card_date">{formatDate(_createdAt)}</p>
          </div>
          <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </div>
            
          </div>
        
          {image && (
        <img
          src={urlFor(image)}
          alt="Survey Image"
          className="survey-card_img"
        />
      )}
    
          <div className="flex-between gap-3 mt-5">
            <p className="startup-card_desc">{description}</p>
          <div className="flex-between gap-3 mt-5"></div>
            <p className="text-16-medium">{category}</p>
            
              <Link href={`/survey/${_id}`}>Details</Link>

1          </div>
        </li>
      );
    };

export default SurveyCard;