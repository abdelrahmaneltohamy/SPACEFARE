module.exports = (srv) => {
    
	srv.before('UPDATE', (req)=>{
        console.log('in update')
        console.log(req.user)
    });

	srv.before('DELETE',  (req)=>{
        console.log(req.user)
    });
    srv.before('READ',  (req)=>{
        console.log(req)
    })
    srv.before('UPDATE', 'Galactic_Spacefarer', (req)=>{
        console.log(req)
    });
	srv.before('CREATE','Galactic_Spacefarer',  async(req)=>{
        if(req.data['wormhole_navigation_skill']<2)
         throw new Error('wormhole_navigation_skill is too low');
         if(req.data['stardust_collection']<2)
         throw new Error('stardust_collection is too low');
         let tx = cds.transaction();
        let data = req.data;
        console.log(data);
        let isUpdate = await tx.run('select id from my_communitymanager_Galactic_Spacefarer where id =?',[data.id]);
        if(isUpdate.length>0){
            console.log('is update')
            await tx.run('delete from my_communitymanager_Galactic_Spacefarer where id =?',[data.id]);
            req.update=true
        }else
            req.update=false
        tx.commit();
        
    });

    srv.after('CREATE','Galactic_Spacefarer',  async(req)=>{
        console.log(req.update);
        if(!req.update){
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abdelrahmaunaldi@gmail.com',
                pass: 'xamkwelvpwexqgjm'
            }
            });
    
            var mailOptions = {
            from: 'abdelrahmaunaldi@gmail.com',
            to: 'abdelrahmauneltohamy@gmail.com',
            subject: 'Created',
            text: 'spacefarer created'
            };
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
    
        }
    });

    srv.before('DELETE','Galactic_Spacefarer',  (req)=>{
        console.log(req)
    });
    srv.before('READ','Galactic_Spacefarer',  async(req)=>{
     
    })
    }