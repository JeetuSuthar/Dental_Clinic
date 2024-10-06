import React from 'react';
import Card from '../components/Card';

function Treatment() {
  return (
    
    <div>
      <h1 className='text-5xl  text-black font-bold lg:pl-20 lg:ml-20 ml-8  py-10' >Treatments</h1>
    <div className="flex justify-center py-8 ">
      
      <div className="p-2 grid gap-5 lg:gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <Card para="Let's save the tooth" subject="Root Canal Treatment" image="https://d3t5ai5vcxyqte.cloudfront.net/media/jtklaazjieqhljbboiyao.svg" />
        <Card para="Are you eyeing whiter teeth?" subject="Teeth Whitening" image="https://d3t5ai5vcxyqte.cloudfront.net/media/xerhpggjxuxmfpsu.svg" />
        <Card para="Make your implants last a lifetime." subject="Dental Implants" image="https://d3t5ai5vcxyqte.cloudfront.net/media/xckdqmsbqpdhzlhvwood.svg" />
        <Card para="Know the right type of denture for you." subject="Dentures" image="https://d3t5ai5vcxyqte.cloudfront.net/media/ztyabpe.svg" />
        <Card para="Repairing the decay with fillings that blend in." subject="Dental Fillings" image="https://d3t5ai5vcxyqte.cloudfront.net/media/pegjpxeakmijzlnklbubfsfun.svg" />
        <Card para="Never be too shy to smile" subject="Orthodontic Treatment/Braces" image="https://d3t5ai5vcxyqte.cloudfront.net/media/znrdvnh.svg" />
        <Card para="Time to flaunt that smile" subject="Cosmetic Dentistry" image="https://d3t5ai5vcxyqte.cloudfront.net/media/trteeoeviitzkuduaj.svg" />
        <Card para="For your child’s dental health" subject="Pediatric Dentistry" image="https://d3t5ai5vcxyqte.cloudfront.net/media/rkkaxifntuslufcqwxelgzu.svg" />
      </div>
    </div>
    </div>
  );
}

export default Treatment;
