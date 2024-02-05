import convert from "react-from-dom";

export const htmlJson = convert(`
<main>
<header>
<p class="heading">Select Text To Add Comments, Highlight text ..</p>
</header>
<div class="blog-post">
<p class="post-title">Why Nepal is the Best Place to Visit</p>
<p class="post-meta">Author Name | Publication Date</p>
<div class="post-content">
    <p>
        Nepal, a small landlocked country nestled in the lap of the Himalayas, is a paradise for travelers and adventure seekers alike. Here are some compelling reasons why Nepal should be at the top of your travel bucket list:
    </p>
    <!-- Different Paragraph Styles -->
    <p class="left-right">
        Nepal's diverse landscapes and cultures make it a unique destination. From the lush green valleys of Pokhara to the arid mountain deserts of Upper Mustang.
    </p>

    <p class="blog-quote">
        "The mountains are calling, and I must go." - John Muir. This famous quote perfectly captures the allure of Nepal's majestic peaks, drawing adventurers from all corners of the globe.
    </p>

    <ul>
        <li><strong>Breathtaking Himalayan Landscapes:</strong> Nepal is home to eight of the world's fourteen highest peaks, including Mount Everest, the highest of them all. The stunning Himalayan landscapes offer awe-inspiring views and fantastic trekking opportunities.</li>
        <li><strong>Rich Cultural Heritage:</strong> Nepal is steeped in history and culture. The ancient cities of Kathmandu, Bhaktapur, and Patan are UNESCO World Heritage sites, featuring beautiful temples, palaces, and shrines that showcase the country's unique architecture and traditions.</li>
        <li><strong>Spiritual and Peaceful Environment:</strong> The serene atmosphere and numerous monasteries and stupas in Nepal create a perfect environment for spiritual exploration and meditation.</li>
        <div class="card-with-shadow">
    <p>
        Planning a trip to Nepal? Don't forget to visit Chitwan National Park, where you can spot various wildlife species and have a thrilling encounter with the endangered one-horned rhinoceros.
    </p>
</div>
        <li><strong>Adventure Sports:</strong> For adrenaline junkies, Nepal offers a range of adventure sports, including trekking, mountaineering, white-water rafting, paragliding, and jungle safaris.</li>
        <li><strong>Warm Hospitality:</strong> Nepalese people are known for their warm hospitality and friendliness towards visitors. You'll feel welcome and at home throughout your journey.</li>
        <li><strong>Delicious Nepali Cuisine:</strong> Don't miss the opportunity to savor authentic Nepali dishes like momo, dal bhat, and Newari delicacies.</li>
        <li><strong>Diverse Flora and Fauna:</strong> Nepal's rich biodiversity is a haven for nature lovers. National parks and wildlife reserves are home to a wide range of flora and fauna, including the elusive Bengal tiger and the one-horned rhinoceros.</li>
    </ul>
    <p>
        Whether you're an adventure enthusiast, a culture buff, a nature lover, or seeking spiritual rejuvenation, Nepal offers something for everyone. So, pack your bags and embark on a journey to discover the wonders of this enchanting Himalayan nation.
    </p>

  



    <p class="top-bottom">
        To experience Nepal's spirituality, head to Boudhanath Stupa, one of the largest stupas in the world. The sight of pilgrims circling the stupa in a clockwise direction is a mesmerizing display of devotion and faith.
    </p>
</div>
</div>
<div class="comments-section-reed">
<h3>Comments</h3>
<div class="comment">
    <p class="comment-author">John Doe</p>
    <p class="comment-content">This sounds amazing! Nepal is now on my travel list.</p>
</div>
</div>
</main>`);